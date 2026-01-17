/**
 * Page Loader
 * แสดง loading animation พร้อม progress bar
 */
(function() {
  var loader = document.getElementById('page-loader');
  var progressBar = document.getElementById('loader-progress-bar');
  var percentText = document.getElementById('loader-percent');
  
  if (!loader || !progressBar || !percentText) return;

  var progress = 0;
  var targetProgress = 0;
  var interval;

  // Simulate loading progress
  function updateProgress() {
    if (progress < targetProgress) {
      progress += 1;
      progressBar.style.width = progress + '%';
      percentText.textContent = progress + '%';
    }
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(function() {
        loader.classList.add('loaded');
        document.body.style.overflow = '';
      }, 300);
    }
  }

  // Start loading simulation
  function startLoading() {
    document.body.style.overflow = 'hidden';
    
    // Phase 1: Quick start (0-30%)
    targetProgress = 30;
    interval = setInterval(updateProgress, 20);
    
    // Phase 2: Medium progress (30-70%)
    setTimeout(function() {
      targetProgress = 70;
    }, 500);
    
    // Phase 3: Almost done (70-90%)
    setTimeout(function() {
      targetProgress = 90;
    }, 1000);
  }

  // Complete loading when page is fully loaded
  function completeLoading() {
    targetProgress = 100;
  }

  // Initialize
  startLoading();

  // Wait for all resources to load
  if (document.readyState === 'complete') {
    completeLoading();
  } else {
    window.addEventListener('load', completeLoading);
  }

  // Fallback: Force complete after 3 seconds
  setTimeout(function() {
    if (progress < 100) {
      targetProgress = 100;
    }
  }, 3000);
})();
