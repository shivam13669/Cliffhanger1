if (window.IntersectionObserver) {
  const originalObserve = IntersectionObserver.prototype.observe;
  IntersectionObserver.prototype.observe = function(element) {
    if (element && element instanceof Element) {
      return originalObserve.call(this, element);
    }
    return undefined;
  };
}
