(function() {
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = 300;

      if (scrolled > coords) {
        goTopBtn.classList.remove('hide');
      }
      if (scrolled < coords) {
        goTopBtn.classList.add('hide');
      }
    }

    var goTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();