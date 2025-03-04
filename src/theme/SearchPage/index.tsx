import React, { useEffect } from 'react';
import SearchPage from '@theme-original/SearchPage';

export default function SearchPageWrapper(props: any): JSX.Element {
  // Add custom click handler to search results and fix UI issues
  useEffect(() => {
    // Function to fix the "See All Results" button position
    const fixSeeAllResultsPosition = (): void => {
      // Find the search results container
      const searchResultContainer = document.querySelector('.search-result-container');
      if (!searchResultContainer) return;
      
      // Find the original "See All Results" button
      const originalSeeAllButton = document.querySelector('.search-result-see-all:not(.search-result-see-all-fixed)');
      
      // Find the search results list
      const searchResultList = document.querySelector('.search-result-list');
      if (!searchResultList) return;
      
      // Check if we already created a fixed button
      const existingFixedButton = document.querySelector('.search-result-see-all-fixed');
      if (existingFixedButton) return;
      
      // If we found the original button, hide it with CSS
      if (originalSeeAllButton) {
        (originalSeeAllButton as HTMLElement).style.display = 'none';
        
        // Create a new button at the bottom
        const newSeeAllButton = document.createElement('div');
        newSeeAllButton.className = 'search-result-see-all search-result-see-all-fixed';
        newSeeAllButton.innerHTML = originalSeeAllButton.innerHTML;
        
        // Copy click handler from original button
        newSeeAllButton.addEventListener('click', () => {
          // Simulate click on the original button
          (originalSeeAllButton as HTMLElement).click();
        });
        
        // Add the new button to the end of the search results list
        searchResultList.appendChild(newSeeAllButton);
      }
    };
    
    const addClickHandlers = (): void => {
      // Find all search result links (try different class names that might be used by the plugin)
      const searchResultLinks = document.querySelectorAll('.search-result-match a, .search-result a, .search-item a, .search-result-item a, .search-hit a');
      
      // Add click handler to each link
      searchResultLinks.forEach(link => {
        // Only add handler if it doesn't already have one
        if (!link.getAttribute('data-has-handler')) {
          link.setAttribute('data-has-handler', 'true');
          
          // Store original href
          const originalHref = link.getAttribute('href') || '';
          
          // Add click handler
          link.addEventListener('click', () => {
            // Get the search term
            const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement | null;
            if (searchInput && searchInput.value) {
              // Modify href to include search term as query parameter
              const searchTerm = encodeURIComponent(searchInput.value);
              const separator = originalHref.includes('?') ? '&' : '?';
              link.setAttribute('href', `${originalHref}${separator}q=${searchTerm}`);
            }
          });
        }
      });
    };

    // Set up a mutation observer to watch for search results being added to the DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          addClickHandlers();
          fixSeeAllResultsPosition();
        }
      });
    });

    // Start observing the document body for DOM changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial calls
    addClickHandlers();
    fixSeeAllResultsPosition();
    
    // Set up an interval to periodically check and fix the button position
    // This helps catch cases where the button is added after our initial checks
    const intervalId = setInterval(fixSeeAllResultsPosition, 500);

    // Cleanup
    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  return <SearchPage {...props} />;
}
