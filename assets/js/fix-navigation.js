document.addEventListener('DOMContentLoaded', function() {
  // Convert absolute himalayanhikers.in URLs to relative paths
  const links = document.querySelectorAll('a[href*="himalayanhikers.in"]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href && href.includes('himalayanhikers.in')) {
      // Extract the path part after the domain
      const url = new URL(href, window.location.origin);
      const pathname = url.pathname;
      
      // Set the href to relative path
      link.setAttribute('href', pathname);
    }
  });
  
  // Also handle the logo links that navigate to home
  const logoLinks = document.querySelectorAll('.header-logo-desktop a, .header-logo-mobile a, .mobile-logo a');
  logoLinks.forEach(link => {
    if (link.getAttribute('href') === 'https://himalayanhikers.in' || 
        link.getAttribute('href') === 'https://himalayanhikers.in/') {
      link.setAttribute('href', '/');
    }
  });
  
  // Handle external links differently - let them work as intended
  const externalLinks = document.querySelectorAll('a[href*="rent.himalayanhikers.in"], a[href*="youtube.com"], a[href*="facebook.com"]');
  // These can stay as is since they're external
});
