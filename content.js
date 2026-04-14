// Dark Mode Chrome Extension - content.js
// Check storage on page load and apply dark mode if enabled
(function () {
    const STYLE_ID = '__dark_mode_ext_style__';

   function applyDarkMode() {
         if (document.getElementById(STYLE_ID)) return;
         const style = document.createElement('style');
         style.id = STYLE_ID;
         style.textContent = `
               html {
                       filter: invert(1) hue-rotate(180deg) !important;
                               transition: filter 0.3s ease !important;
                                     }
                                           img, video, canvas, iframe, embed, object, svg image {
                                                   filter: invert(1) hue-rotate(180deg) !important;
                                                         }
                                                               picture > img {
                                                                       filter: invert(1) hue-rotate(180deg) !important;
                                                                             }
                                                                                   picture {
                                                                                           filter: none !important;
                                                                                                 }
                                                                                                       [style*="background-image"]:not(html):not(body) {
                                                                                                               filter: invert(1) hue-rotate(180deg) !important;
                                                                                                                     }
                                                                                                                         `;
         (document.head || document.documentElement).appendChild(style);
   }

   function removeDarkMode() {
         const style = document.getElementById(STYLE_ID);
         if (style) style.remove();
   }

   // Apply dark mode on initial page load if it was previously enabled
   chrome.storage.sync.get(['darkModeEnabled'], (result) => {
         if (result.darkModeEnabled) {
                 applyDarkMode();
         }
   });

   // Listen for toggle messages from the popup
   chrome.runtime.onMessage.addListener((message) => {
         if (message.action === 'enableDarkMode') {
                 applyDarkMode();
         } else if (message.action === 'disableDarkMode') {
                 removeDarkMode();
         }
   });
})();
