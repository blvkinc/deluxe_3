import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./EnhancedGallery.css";
import LazyImage from "../../common/LazyImage";
import { usePerformanceMonitor } from "../../../hooks/usePerformanceMonitor";

const EnhancedGallery = ({ sections, productName }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const { markEnd } = usePerformanceMonitor('EnhancedGallery');

    // Preload images for better performance
    const preloadImages = useCallback((images) => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        if (activeSection !== null && sections[activeSection]) {
            preloadImages(sections[activeSection].images);
        }
    }, [activeSection, sections, preloadImages]);

    // Initialize gallery animation
    useEffect(() => {
        const container = document.querySelector(".enhanced-gallery-container");
        if (container) {
            setTimeout(() => {
                container.classList.remove("s--inactive");
            }, 200);
        }
    }, []);

    // Handle section click
    const handleSectionClick = useCallback((index) => {
        if (activeSection === index) return;

        setIsLoading(true);
        setActiveSection(index);
        setActiveImageIndex(0);

        const container = document.querySelector(".enhanced-gallery-container");
        container?.classList.add("s--el-active");

        setTimeout(() => setIsLoading(false), 300);
    }, [activeSection]);

    // Handle close
    const handleClose = useCallback(() => {
        const container = document.querySelector(".enhanced-gallery-container");
        container?.classList.remove("s--el-active");
        setActiveSection(null);
        setActiveImageIndex(0);
    }, []);

    // Navigation functions
    const handleNextImage = useCallback(() => {
        if (activeSection !== null && sections[activeSection]) {
            const maxIndex = sections[activeSection].images.length - 1;
            setActiveImageIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }
    }, [activeSection, sections]);

    const handlePrevImage = useCallback(() => {
        if (activeSection !== null && sections[activeSection]) {
            const maxIndex = sections[activeSection].images.length - 1;
            setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        }
    }, [activeSection, sections]);

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNextImage();
        } else if (isRightSwipe) {
            handlePrevImage();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (activeSection === null) return;

            switch (e.key) {
                case 'ArrowLeft':
                    handlePrevImage();
                    break;
                case 'ArrowRight':
                    handleNextImage();
                    break;
                case 'Escape':
                    handleClose();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [activeSection, handlePrevImage, handleNextImage, handleClose]);

    // Memoized current image
    const currentImage = useMemo(() => {
        if (activeSection !== null && sections[activeSection]) {
            return sections[activeSection].images[activeImageIndex];
        }
        return null;
    }, [activeSection, activeImageIndex, sections]);

    return (
        <>
            {/* Desktop Gallery */}
            <div className="desktop-gallery">
                <div className="enhanced-gallery-container s--inactive">
                    <div className="gallery-inner">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className={`gallery-section ${activeSection === index ? 's--active' : ''}`}
                                onClick={() => handleSectionClick(index)}
                            >
                                <div className="section-overflow">
                                    <div className="section-inner">
                                        <div className="section-bg">
                                            <div className="image-container">
                                                {activeSection === index ? (
                                                    <LazyImage
                                                        src={currentImage}
                                                        alt={`${section.name} ${activeImageIndex + 1}`}
                                                        className={isLoading ? 'loading' : ''}
                                                        onTouchStart={handleTouchStart}
                                                        onTouchMove={handleTouchMove}
                                                        onTouchEnd={handleTouchEnd}
                                                        onLoad={() => markEnd('image-load')}
                                                    />
                                                ) : (
                                                    <LazyImage
                                                        src={section.images[0]}
                                                        alt={`${section.name} preview`}
                                                        className="preview-image"
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        <div className="section-preview">
                                            <h2 className="section-heading">{section.name}</h2>
                                            <div className="image-counter">
                                                {activeSection === index && (
                                                    <span>
                                                        {activeImageIndex + 1} / {section.images.length}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {activeSection === index && (
                                            <div className="section-content">
                                                <button
                                                    className="nav-btn prev-btn"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handlePrevImage();
                                                    }}
                                                    aria-label="Previous image"
                                                >
                                                    &#10094;
                                                </button>

                                                <button
                                                    className="nav-btn next-btn"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleNextImage();
                                                    }}
                                                    aria-label="Next image"
                                                >
                                                    &#10095;
                                                </button>

                                                <div className="image-dots">
                                                    {section.images.map((_, imgIndex) => (
                                                        <button
                                                            key={imgIndex}
                                                            className={`dot ${imgIndex === activeImageIndex ? 'active' : ''}`}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveImageIndex(imgIndex);
                                                            }}
                                                            aria-label={`Go to image ${imgIndex + 1}`}
                                                        />
                                                    ))}
                                                </div>

                                                <button
                                                    className="close-btn"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleClose();
                                                    }}
                                                    aria-label="Close gallery"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Gallery */}
            <div className="mobile-gallery">
                <MobileGallery sections={sections} productName={productName} />
            </div>
        </>
    );
};

// Mobile Gallery Component
const MobileGallery = ({ sections, productName }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleSectionClick = (index) => {
        setActiveSection(activeSection === index ? null : index);
        setActiveImageIndex(0);
    };

    const handleNextImage = (sectionIndex) => {
        const maxIndex = sections[sectionIndex].images.length - 1;
        setActiveImageIndex(prev => prev < maxIndex ? prev + 1 : 0);
    };

    const handlePrevImage = (sectionIndex) => {
        const maxIndex = sections[sectionIndex].images.length - 1;
        setActiveImageIndex(prev => prev > 0 ? prev - 1 : maxIndex);
    };

    return (
        <div className="mobile-gallery-container">
            {sections.map((section, sectionIndex) => (
                <div key={section.name} className="mobile-section">
                    <div
                        className="mobile-section-header"
                        onClick={() => handleSectionClick(sectionIndex)}
                    >
                        <h3>{section.name}</h3>
                        <span className={`expand-icon ${activeSection === sectionIndex ? 'expanded' : ''}`}>
                            ▼
                        </span>
                    </div>

                    {activeSection === sectionIndex && (
                        <div className="mobile-section-content">
                            <div className="mobile-image-container">
                                <LazyImage
                                    src={section.images[activeImageIndex]}
                                    alt={`${section.name} ${activeImageIndex + 1}`}
                                />

                                <button
                                    className="mobile-nav-btn mobile-prev"
                                    onClick={() => handlePrevImage(sectionIndex)}
                                >
                                    &#10094;
                                </button>

                                <button
                                    className="mobile-nav-btn mobile-next"
                                    onClick={() => handleNextImage(sectionIndex)}
                                >
                                    &#10095;
                                </button>

                                <div className="mobile-image-counter">
                                    {activeImageIndex + 1} / {section.images.length}
                                </div>
                            </div>

                            <div className="mobile-dots">
                                {section.images.map((_, imgIndex) => (
                                    <button
                                        key={imgIndex}
                                        className={`mobile-dot ${imgIndex === activeImageIndex ? 'active' : ''}`}
                                        onClick={() => setActiveImageIndex(imgIndex)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default React.memo(EnhancedGallery);