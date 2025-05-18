// Store the event globally
window.deferredPrompt = null;

// Show/hide the whole section (text + button)
function showPwaInstallSection(show) {
  var section = document.getElementById('pwa-install-section');
  if (section) section.style.display = show ? 'flex' : 'none';
}

// Listen for beforeinstallprompt event ONCE per site
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  window.deferredPrompt = e;
  showPwaInstallSection(true);
});

document.addEventListener('DOMContentLoaded', function() {
  // Hide section by default
  showPwaInstallSection(!!window.deferredPrompt);
  var btn = document.getElementById('pwa-install-btn');
  if (btn) {
    btn.addEventListener('click', async function() {
      if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        await window.deferredPrompt.userChoice;
        window.deferredPrompt = null;
        showPwaInstallSection(false);
      }
    });
  }
});
