// Hide Himalayan Hikers logo from header (keep space for layout)
(function() {
  function hideLogo() {
    // Hide desktop logo but keep space
    const desktopLogo = document.querySelector('.header-logo-desktop');
    if (desktopLogo) {
      desktopLogo.style.visibility = 'hidden';
    }

    // Hide logo link in mobile header, keep search and menu buttons
    const mobileLogo = document.querySelector('.header-logo-mobile > a');
    if (mobileLogo) {
      mobileLogo.style.visibility = 'hidden';
    }
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideLogo);
  } else {
    hideLogo();
  }

  // Also run after a small delay to ensure DOM is fully ready
  setTimeout(hideLogo, 100);
})();
