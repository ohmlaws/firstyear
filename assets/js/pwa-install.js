function showPwaInstallSection(show) {
  var section = document.getElementById('pwa-install-section');
  if (section) section.style.display = show ? 'flex' : 'none';
}

window.deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  window.deferredPrompt = e;
  showPwaInstallSection(true);
});

document.addEventListener('DOMContentLoaded', function() {
  // Hide section by default unless prompt is available
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
