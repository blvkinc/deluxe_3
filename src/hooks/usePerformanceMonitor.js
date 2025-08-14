import { useEffect, useRef } from 'react';

export const usePerformanceMonitor = (componentName) => {
  const startTime = useRef(performance.now());
  
  useEffect(() => {
    const endTime = performance.now();
    const renderTime = endTime - startTime.current;
    
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
    }
    
    // Report to analytics in production (optional)
    if (process.env.NODE_ENV === 'production' && renderTime > 100) {
      // You can integrate with analytics services here
      console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
    }
  });
  
  return {
    markStart: () => {
      startTime.current = performance.now();
    },
    markEnd: (label = 'operation') => {
      const endTime = performance.now();
      const duration = endTime - startTime.current;
      console.log(`${componentName} ${label}: ${duration.toFixed(2)}ms`);
      return duration;
    }
  };
};

export const useImageLoadMonitor = () => {
  const loadTimes = useRef({});
  
  const trackImageLoad = (imageUrl, startTime) => {
    const endTime = performance.now();
    const loadTime = endTime - startTime;
    loadTimes.current[imageUrl] = loadTime;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Image loaded: ${imageUrl.split('/').pop()} in ${loadTime.toFixed(2)}ms`);
    }
    
    return loadTime;
  };
  
  const getAverageLoadTime = () => {
    const times = Object.values(loadTimes.current);
    if (times.length === 0) return 0;
    return times.reduce((sum, time) => sum + time, 0) / times.length;
  };
  
  return {
    trackImageLoad,
    getAverageLoadTime,
    getAllLoadTimes: () => loadTimes.current
  };
};