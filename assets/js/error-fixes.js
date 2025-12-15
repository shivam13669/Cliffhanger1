// Fix 1: Handle null mobileSearchInput element
(function() {
  const initMobileSearch = function() {
    const mobileSearchInput = document.getElementById("mobileSearchInput");
    if (!mobileSearchInput) return;
    
    mobileSearchInput.addEventListener("keyup", function () {
      const query = this.value;
      const output = document.getElementById("mobileSearchResults");
    
      if (query.length === 0) {
        output.innerHTML = "";
        output.style.display = "none";
        return;
      }
    
      fetch("search.php?q=" + encodeURIComponent(query))
        .then(response => response.text())
        .then(data => {
          output.innerHTML = data;
          output.style.display = "block";
        })
        .catch(err => {
          output.innerHTML = "<div style='color:red;'>Error loading results</div>";
          output.style.display = "block";
        });
    });
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileSearch);
  } else {
    initMobileSearch();
  }
})();
