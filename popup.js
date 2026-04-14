// Dark Mode Chrome Extension - popup.js

const toggle = document.getElementById('toggle');
const stateLabel = document.getElementById('stateLabel');
const stateDesc = document.getElementById('stateDesc');
const card = document.getElementById('card');
const icon = document.getElementById('icon');

// Load current state from storage
chrome.storage.sync.get(['darkModeEnabled'], (result) => {
  const enabled = result.darkModeEnabled || false;
    toggle.checked = enabled;
      updateUI(enabled);
      });

      // Handle toggle change
      toggle.addEventListener('change', () => {
        const enabled = toggle.checked;

          // Save state to storage
            chrome.storage.sync.set({ darkModeEnabled: enabled });

              // Update popup UI
                updateUI(enabled);

                  // Send message to all open tabs
                    const action = enabled ? 'enableDarkMode' : 'disableDarkMode';
                      chrome.tabs.query({}, (tabs) => {
                          tabs.forEach((tab) => {
                                if (
                                        tab.url &&
                                                !tab.url.startsWith('chrome://') &&
                                                        !tab.url.startsWith('chrome-extension://') &&
                                                                !tab.url.startsWith('edge://') &&
                                                                        !tab.url.startsWith('about:')
                                                                              ) {
                                                                                      chrome.tabs.sendMessage(tab.id, { action }).catch(() => {});
                                                                                            }
                                                                                                });
                                                                                                  });
                                                                                                  });

                                                                                                  function updateUI(enabled) {
                                                                                                    if (enabled) {
                                                                                                        stateLabel.textContent = 'On';
                                                                                                            stateDesc.textContent = 'Active on all pages';
                                                                                                                icon.textContent = '';
                                                                                                                    card.classList.add('active');
                                                                                                                      } else {
                                                                                                                          stateLabel.textContent = 'Off';
                                                                                                                              stateDesc.textContent = 'Disabled on all pages';
                                                                                                                                  icon.textContent = '';
                                                                                                                                      card.classList.remove('active');
                                                                                                                                        }
                                                                                                                                        }
