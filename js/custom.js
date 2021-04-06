$(function(){
//--------------------------------------------------
//Customizing the landing page menu
	$('.menu__link').click(function(){
    $('#perspective').removeClass('effect-moveleft')
    $('#perspective').removeClass('modalview')
    $('#perspective').removeClass('animate')
    /*var height = $(window).height();
    $(window).scrollTop(height);*///Еhis script skips the first screen
  })
  $('.menu-toggle').click(function(){
    $('#perspective').addClass('effect-moveleft')
    $('#perspective').addClass('modalview')
  })
//--------------------------------------------------
//LOADER
  $(window).on('load', function () {
      var $preloader = $('#p_prldr'),
          $svg_anm   = $preloader.find('.svg_anm');
      $svg_anm.fadeOut();
      $preloader.delay(500).fadeOut('slow');
  });
//--------------------------------------------------
	var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*408/100;
        el.innerHTML = '<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 408px;" r="65" cx="-80" cy="80" /><circle class="dot" transform="rotate(-90)" r="10" cx="-80" cy="80" /><defs><linearGradient id="gradient"><stop offset="0%" style="stop-color: rgb(255,106,102)"></stop><stop offset="100%" style="stop-color: rgb(220,4,77)"></stop></linearGradient></defs></svg>';
        
    });
};
Circle('.circle');

//--------------------------------------------------
$('.skills_slider').slick({
		dots: false,
		arrows: true,
		prevArrow: '<img src="img/chevron-left-solid.svg">',
		nextArrow: '<img src="img/chevron-right-solid.svg">',
  		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		responsive: [
                {
                    breakpoint: 991,
                    settings: {
                    	autoplay: true,
 						autoplaySpeed: 2000,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                    	autoplay: true,
 						autoplaySpeed: 2000,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
});

//--------------------------------------------------
//Автоматическая высота окна
var textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});
//--------------------------------------------------
//Плавный скрол
    var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});
//--------------------------------------------------
//button top 
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
            } else {
    $('#toTop').fadeOut();
    }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
//--------------------------------------------------
//Галиререя изображенния
const init = {
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  infinite: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1
};

$(() => {
  const win = $(window);
  const slider = $(".services_gallery_slider");

  win.on("load resize", () => {
    if (win.width() < 767) {
      slider.not(".slick-initialized").slick(init);
    } else if (slider.hasClass("slick-initialized")) {
      slider.slick("unslick");
    }
  });
});

$(() => {
  const win = $(window);
  const slider = $(".services_icons_slider");

  win.on("load resize", () => {
    if (win.width() < 479) {
      slider.not(".slick-initialized").slick(init);
    } else if (slider.hasClass("slick-initialized")) {
      slider.slick("unslick");
    }
  });
});
//--------------------------------------------------
//Gallery
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });
//--------------------------------------------------
$('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
//--------------------------------------------------
new WOW().init();
});




   


