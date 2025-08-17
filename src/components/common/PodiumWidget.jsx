import { useEffect } from 'react';

const PodiumWidget = () => {
  useEffect(() => {
    // Ensure Podium script is loaded
    const checkPodium = () => {
      if (window.PodiumWebChat) {
        // Podium is already loaded
        return;
      }
      
      // Load Podium if not already loaded
      const script = document.createElement('script');
      script.src = 'https://connect.podium.com/widget.js';
      script.async = true;
      script.onload = () => {
        if (window.PodiumWebChat) {
          window.PodiumWebChat('init', {
            organizationToken: 'cf270be8-0d54-4e1f-94e3-8b6e41f2d003'
          });
        }
      };
      document.head.appendChild(script);
    };

    // Check if Podium is loaded, if not load it
    if (typeof window !== 'undefined') {
      checkPodium();
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PodiumWidget;