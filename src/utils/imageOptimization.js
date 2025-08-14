// Image optimization utilities
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (srcArray) => {
  return Promise.all(srcArray.map(preloadImage));
};

// Lazy loading intersection observer
export const createImageObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// WebP support detection
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Generate optimized image URL with CDN parameters
export const getOptimizedImageUrl = (originalUrl, options = {}) => {
  const {
    width,
    height,
    quality = 85,
    format = 'webp'
  } = options;

  // If it's already a CDN URL, add optimization parameters
  if (originalUrl.includes('b-cdn.net')) {
    let optimizedUrl = originalUrl;
    
    // Add width parameter
    if (width) {
      optimizedUrl += optimizedUrl.includes('?') ? '&' : '?';
      optimizedUrl += `width=${width}`;
    }
    
    // Add height parameter
    if (height) {
      optimizedUrl += optimizedUrl.includes('?') ? '&' : '?';
      optimizedUrl += `height=${height}`;
    }
    
    // Add quality parameter
    optimizedUrl += optimizedUrl.includes('?') ? '&' : '?';
    optimizedUrl += `quality=${quality}`;
    
    return optimizedUrl;
  }
  
  return originalUrl;
};

// Responsive image sizes for different breakpoints
export const getResponsiveImageSizes = () => {
  return {
    mobile: { width: 480, quality: 75 },
    tablet: { width: 768, quality: 80 },
    desktop: { width: 1200, quality: 85 },
    large: { width: 1920, quality: 90 }
  };
};

// Get appropriate image size based on screen width
export const getCurrentImageSize = () => {
  const width = window.innerWidth;
  const sizes = getResponsiveImageSizes();
  
  if (width <= 480) return sizes.mobile;
  if (width <= 768) return sizes.tablet;
  if (width <= 1200) return sizes.desktop;
  return sizes.large;
};