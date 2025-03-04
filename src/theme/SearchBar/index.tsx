import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props: any): JSX.Element {
  // Add event listener to the search input to handle Enter key press
  useEffect(() => {
    const enhanceSearchInput = (): void => {
      const searchInput = document.querySelector('input[type="search"]');
      if (!searchInput || searchInput.getAttribute('data-enhanced')) {
        return;
      }
      
      // Mark as enhanced to avoid duplicate handlers
      searchInput.setAttribute('data-enhanced', 'true');
      
      // Add placeholder text to help users
      searchInput.setAttribute('placeholder', 'Rechercher...');
      
      // Add a title attribute for tooltip
      searchInput.setAttribute('title', 'Appuyez sur / pour rechercher');
    };
    
    // Initial enhancement
    enhanceSearchInput();
    
    // Set up observer to handle dynamically added search inputs
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          enhanceSearchInput();
        }
      });
    });
    
    // Start observing
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return <SearchBar {...props} />;
}
