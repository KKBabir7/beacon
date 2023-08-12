$('.main-slide .carousel').carousel({
  pause: "false",
  interval: 10000 
});
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 7000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});




(function(){
  $('.slide-by-one-in-group .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<3;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());











		
		
const scrollToTopButton = document.getElementById('js-top');
			

window.addEventListener('scroll', () => {
  // Get the current scroll value
  let ye = window.scrollY;
  if (ye > 100) {
  scrollToTopButton.style.bottom = '10px'
  } else {
  scrollToTopButton.style.bottom = '-200px'
  }
})
