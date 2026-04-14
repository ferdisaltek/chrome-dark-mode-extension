// Dark Mode Chrome Extension - background.js (Service Worker)
// Apply dark mode to newly opened or updated tabs if the feature is enabled

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only act when the page has fully loaded
    if (changeInfo.status === 'complete' && tab.url) {
        // Skip internal browser pages
            if (
                  tab.url.startsWith('chrome://') ||
                        tab.url.startsWith('chrome-extension://') ||
                              tab.url.startsWith('edge://') ||
                                    tab.url.startsWith('about:')
                                        ) {
                                              return;
                                                  }

                                                      chrome.storage.sync.get(['darkModeEnabled'], (result) => {
                                                            if (result.darkModeEnabled) {
                                                                    chrome.tabs.sendMessage(tabId, { action: 'enableDarkMode' }).catch(() => {
                                                                              // Silently ignore if content script hasn't loaded yet
                                                                                      });
                                                                                            }
                                                                                                });
                                                                                                  }
                                                                                                  });
