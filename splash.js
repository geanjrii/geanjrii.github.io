// Splash Screen Logic
// This file handles when to remove the splash screen based on Flutter load status

let splashRemoved = false;

function removeSplash() {
  if (splashRemoved) return;
  splashRemoved = true;
  
  const splash = document.getElementById('splash-screen');
  if (splash) {
    setTimeout(function() {
      splash.classList.add('fade-out');
      setTimeout(function() {
        splash.remove();
        document.body.style.overflow = 'auto';
      }, 500);
    }, 600);
  }
}

// Wait for window load
window.addEventListener('load', function() {
  // Check every 150ms if Flutter has rendered content
  let checkCount = 0;
  const maxChecks = 40; // 6 seconds max
  
  const checkInterval = setInterval(function() {
    checkCount++;
    
    // Check multiple Flutter elements
    const glassPane = document.querySelector('flt-glass-pane');
    const flutterView = document.querySelector('flutter-view');
    const semantics = document.querySelector('flt-semantics-host');
    
    // If any Flutter element has meaningful content
    const hasContent = (glassPane && glassPane.children.length > 0) ||
                      (flutterView && flutterView.children.length > 0) ||
                      (semantics);
    
    if (hasContent || checkCount >= maxChecks) {
      clearInterval(checkInterval);
      // Remove splash quickly
      setTimeout(removeSplash, 200);
    }
  }, 150);
});

// Absolute fallback - 7 seconds max
setTimeout(removeSplash, 7000);
