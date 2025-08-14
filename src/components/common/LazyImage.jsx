import React, { useState, useRef, useEffect } from 'react';
import { getOptimizedImageUrl, getCurrentImageSize } from '../../utils/imageOptimization';
import { useImageLoadMonitor } from '../../hooks/usePerformanceMonitor';
import './LazyImage.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  onLoad = () => {},
  onError = () => {},
  optimize = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const { trackImageLoad } = useImageLoadMonitor();
  const loadStartTime = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Get optimized image URL
  const getImageSrc = () => {
    if (!optimize) return src;
    
    const currentSize = getCurrentImageSize();
    return getOptimizedImageUrl(src, currentSize);
  };

  const handleLoad = (e) => {
    if (loadStartTime.current) {
      trackImageLoad(src, loadStartTime.current);
    }
    setIsLoaded(true);
    onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError(e);
  };

  const handleImageStart = () => {
    loadStartTime.current = performance.now();
  };

  return (
    <div 
      ref={imgRef} 
      className={`lazy-image-container ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="lazy-image-placeholder">
          {placeholder || (
            <div 
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                backgroundSize: '200% 100%',
                animation: 'loading 1.5s infinite'
              }}
            />
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div 
          className="lazy-image-error"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5',
            color: '#666'
          }}
        >
          Failed to load image
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={getImageSrc()}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          onLoadStart={handleImageStart}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
          {...props}
        />
      )}

      <style jsx>{`
        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(LazyImage);