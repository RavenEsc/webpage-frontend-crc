(function() {
  fetch('https://4gcjjj7sp4.execute-api.us-east-2.amazonaws.com/dev')
  .then(res => {
      if (!res.ok) {
          throw new Error('Network response was not ok');
      }
      return res.json();
  })
  .then(data => {
      var counter = data.body.counter; // set the counter value from the response
      var counterDisplay = document.getElementById("counter");
      counterDisplay.innerHTML = counter;
      console.log(data);
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
})();

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict