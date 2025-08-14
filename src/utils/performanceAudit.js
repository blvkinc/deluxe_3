// Performance audit utilities
export const measurePageLoad = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0];
    
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
    };
  }
  return null;
};

export const measureLargestContentfulPaint = () => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
        observer.disconnect();
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Fallback timeout
      setTimeout(() => {
        observer.disconnect();
        resolve(0);
      }, 10000);
    } else {
      resolve(0);
    }
  });
};

export const measureCumulativeLayoutShift = () => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      let clsValue = 0;
      
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      
      // Return CLS value after 5 seconds
      setTimeout(() => {
        observer.disconnect();
        resolve(clsValue);
      }, 5000);
    } else {
      resolve(0);
    }
  });
};

export const getResourceLoadTimes = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const resources = performance.getEntriesByType('resource');
    
    return resources.map(resource => ({
      name: resource.name.split('/').pop(),
      type: resource.initiatorType,
      size: resource.transferSize,
      loadTime: resource.responseEnd - resource.requestStart,
      cached: resource.transferSize === 0
    }));
  }
  return [];
};

export const runPerformanceAudit = async () => {
  const pageLoad = measurePageLoad();
  const lcp = await measureLargestContentfulPaint();
  const cls = await measureCumulativeLayoutShift();
  const resources = getResourceLoadTimes();
  
  const audit = {
    pageLoad,
    largestContentfulPaint: lcp,
    cumulativeLayoutShift: cls,
    resources,
    timestamp: new Date().toISOString()
  };
  
  if (process.env.NODE_ENV === 'development') {
    console.group('🔍 Performance Audit');
    console.log('Page Load Metrics:', pageLoad);
    console.log('LCP:', `${lcp.toFixed(2)}ms`);
    console.log('CLS:', cls.toFixed(4));
    console.log('Resource Count:', resources.length);
    console.log('Cached Resources:', resources.filter(r => r.cached).length);
    console.groupEnd();
  }
  
  return audit;
};

// Auto-run audit in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(runPerformanceAudit, 2000);
  });
}