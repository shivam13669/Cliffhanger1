document.addEventListener('DOMContentLoaded', function() {
  const whatsappLinks = document.querySelectorAll('.whatsapp a');
  whatsappLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
    link.style.pointerEvents = 'none';
  });
});
