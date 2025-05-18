// Store the event globally
window.deferredPrompt = null;

// Function to show all install buttons
function showAllPwaButtons() {
  document.querySelectorAll('#pwa-install-btn').forEach(btn => {
    btn.style.display = 'inline-block';
    btn.disabled = false;
  });
}

// Function to hide all install buttons
function hideAllPwaButtons() {
  document.querySelectorAll('#pwa-install-btn').forEach(btn => {
    btn.style.display = 'none';
    btn.disabled = true;
  });
}

// Listen for beforeinstallprompt event ONCE per site
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  window.deferredPrompt = e;
  showAllPwaButtons();
});

// Add click listeners to all install buttons (on page load or dynamically)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#pwa-install-btn').forEach(btn => {
    btn.addEventListener('click', async function() {
      if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        await window.deferredPrompt.userChoice;
        window.deferredPrompt = null;
        hideAllPwaButtons();
      }
    });
  });

  // Initial state
  if (window.deferredPrompt) {
    showAllPwaButtons();
  } else {
    hideAllPwaButtons();
  }
});
