var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-scrollspy',
  offset: -100,
});

$(window).scroll(function() {
  if ($(window).width() <= 575.98) {
    if ($(window).scrollTop() > 100) {
      $('.logo-img').fadeIn();
    } else {
      $('.logo-img').fadeOut();
    }
  }

  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    $('.btn-scroll-down').fadeOut();
  } else {
    $('.btn-scroll-down').fadeIn();
  }
});

$(() => {
  var tabCarousel = setInterval(function() {    
    var tabs = $('.section-3 .tab-wrapper .nav > .nav-item'),
        active = tabs.filter('.active'),
        next = active.next('li'),
        toClick = next.length ? next.find('button') : tabs.eq(0).find('button');
    
    toClick.trigger('click');
    // active.removeClass('active')
    // toClick.closest('li').addClass('active')
  }, 3000);
})
