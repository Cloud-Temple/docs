import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import DocItemLayout from '@theme-original/DocItem/Layout';

export default function DocItemLayoutWrapper(props: any): JSX.Element {
  const location = useLocation();
  
  useEffect(() => {
    // Function to scroll to highlighted elements after page load
    const scrollToHighlighted = (): void => {
      // Get search query from URL
      const searchParams = new URLSearchParams(location.search);
      const query = searchParams.get('q');
      
      if (!query) return;
      
      // Small delay to ensure highlighting has been applied
      setTimeout(() => {
        // Look for highlighted elements (try different class names that might be used by the plugin)
        const highlightedElements = document.querySelectorAll('mark.searchHit, mark.search-highlighting, .search-hit, .search-highlight, mark');
        
        if (highlightedElements.length > 0) {
          // Scroll to the first highlighted element
          highlightedElements[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 500);
    };

    // Execute when page loads or URL changes
    scrollToHighlighted();
  }, [location]);

  return <DocItemLayout {...props} />;
}
