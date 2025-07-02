$(window).load(function() {
  $(".spinner").fadeOut(1000);
  $("#spinback").delay(500).fadeOut(1000);
  // $("main").fadeIn(1000);
});

$(document).ready( function() {
  // $('main').css('display', 'none');
  $(".fancybox").fancybox();
  $(".ughhh").fitVids();
  $(".zoom").each(function(){
    var href= $(this).attr('href');
    // var zoomDiv = $('<div />').attr('id', 'zoom-div').css({'height': '100px', 'width': '100px', 'position': 'absolute'}).html('').appendTo($(this));
    var zoomDiv = $('#magnifier');
    // var wtf = $(this).height();
    // var mag = wtf / $(window).height();

    $(this).zoom({
      url: href, 
      target: zoomDiv, 
      magnify: .8,
      onZoomIn: function(){zoomDiv.show();},
      onZoomOut: function(){zoomDiv.delay(1000).hide();}

    });
  });

  $(".bigzoom").each(function(){
    var href= $(this).attr('href');
    var zoomDiv = $('#magnifier');
    $(this).zoom({
      url: href, 
      target: zoomDiv, 
      magnify: 1.2,
      onZoomIn: function(){zoomDiv.show();},
      onZoomOut: function(){zoomDiv.delay(1000).hide();}

    });
  });




  $('#about').hide();
  $('#contact').hide();

  $('.abt, .cntct').on('click', function() {
    var clickd = $(this).data('id');
    var slide = $("#" + clickd);

    // var menuObj = {event:['What happened?', 'How did I react?', 'Could I have responded another way?'], idea:['...', 'Send this to the community?'], mad:["I was annoyed by...", 'Why did I feel averse to this?', 'What is the counter-argument?']};



    var notSlide = clickd + '' === 'about' ? 'contact' : 'about'; 
    notSlide = clickd + '' === 'contact' ? 'about' : 'contact'; 
    var notThis = notSlide + '' === 'about' ?  'abt' : 'cntct'; 
    notThis = notSlide + '' === 'contact' ? 'cntct' : 'abt';
    $('#' + notSlide).slideUp();
    $('.' + notThis).html('<a>' + notSlide + '</a>');
    // console.log($('.' + notThis));

    var txt = slide.is(':visible') ? clickd : '╳';
    txt = slide.is(':hidden') ? '╳' : clickd;
    $(this).html('<a>' + txt + '</a>');
    slide.slideToggle("5s", "swing");
    // $('#margois').slideToggle("5s", "swing");
  });

  // $('.cntct').on('click', function() {
  //   var txt = $("#contact").is(':visible') ? 'Contact' : '╳';
  //   txt = $("#contact").is(':hidden') ? '╳' : 'Contact';

  //    $(".cntct").html('<a>' + txt + '</a>');
  //   $('#about').slideUp();
  //   $('#contact').slideToggle("5s", "swing");
  //   // $('#margois').slideToggle("5s", "swing");
  // });


  $('.menu').on('click', function() {
    var txt = $(".nav").is(':visible') ? 'Menu' : '╳';
    $('#header > .nav').slideToggle();
    $(".menu").html(txt);

  });

  $('.process-toggle').on('click', function () {
    $(this).parents('.process-section').find('.shiny, .gritty').toggleClass('display-none');

    // $(this).parents('.process-section').find('.shiny, .gritty').is(':visible').hide();
    // $(this).parents('.process-section').find('.shiny, .gritty').is(':hidden').fadeIn();
  });

  var wh = $(window).height();
  var f = $('#footer').offset().top;
      // f = f.top;
  if (f < wh + 100){$('.arrowsfoot').hide(); $('#up').hide(); } else {$('.arrowsfoot').show(); $('#up').show();};
  // console.log(f + "f and w" + wh);
  // console.log(f);


  var backarrows = ['←', '↜', '↞', '↢', '↤', '⇇', '⇍', '⇚', '⇚', '⇜', '⇠', '⇦', '⇽', '⤎', '⤝', '⤛', '◅', '☜', '❮'];
  var nextarrows = ['→', '↝', '↠', '↣', '↦', '⇉', '⇏', '⇛', '⇛', '⇝', '⇢', '⇨', '⇾', '⤏', '⤞', '⤜', '▻', '☞', '❯'];
  // var pages = ['/tarpguide/', '/bitfarm/', '/streettrees/', '/barbie/', '/combs/', '/pigahedron/', '/turtle/', '/orbit/', '/whdt/', '/genderalizations/', '/saturation/', '/taxis/', '/nps/', '/aura/', '/candles/', '/self-extension/'];
  var pages = ['/tarpguide/', '/streettrees/', '/barbie/', '/combs/', '/pigahedron/', '/turtle/', '/orbit/', '/genderalizations/', '/saturation/', '/taxis/', '/self-extension/', '/emoji-compass/', '/truth-goggles/'];

  var indexNum = pages.indexOf(window.location.pathname);
  var backPage = indexNum-1;
  var nextPage = indexNum+1;
  var arrownumber = Math.floor(Math.random() * backarrows.length);

  $('.back').append($('<h2><a href="' + pages[backPage] + '"><span style="position: relative; top: 0px;">' + backarrows[arrownumber] + '</span>&nbsp; previous <span class="mobile-hide">project</span></a></h2>'));
  $('.next').append($('<h2><a href="' + pages[nextPage] + '">next <span class="mobile-hide">project</span> &nbsp;<span style="position: relative; top: 0px;">' + nextarrows[arrownumber] + '</span></a></h2>'));

  if (backPage <0){$('.back').html('&nbsp;'); };
  if (indexNum <0 ){$('.arrows').hide(); } else {$('#margois').hide();};
  if (nextPage + 1 > pages.length){$('.next').hide();};


  var $sort = $('.sort');
  $('#strategy').click(function(){$('.thumb').hide(); $('.strategy').show(); $sort.removeClass('underline'); $(this).addClass('underline');})
  $('#interaction').click(function(){$('.thumb').hide(); $('.interaction').show(); $sort.removeClass('underline'); $(this).addClass('underline');})
  $('#graphic').click(function(){$('.thumb').hide(); $('.graphic').show(); $sort.removeClass('underline'); $(this).addClass('underline');})
  $('#product').click(function(){$('.thumb').hide(); $('.product').show(); $sort.removeClass('underline'); $(this).addClass('underline');})
  $('#data').click(function(){$('.thumb').hide(); $('.data').show(); $sort.removeClass('underline'); $(this).addClass('underline');})
  $('#all').click(function(){$('.thumb').show(); $sort.removeClass('underline'); $(this).addClass('underline');})


$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};

  $(function () {
    $(window).scroll(function () {
      var windowHeight = $(this).height();
      var windowTopPosition = $(this).scrollTop();
      var windowBottomPosition = $(this).scrollBottom();
      if (windowTopPosition > 200 && windowBottomPosition > 250) {
        $('#up-fixed').fadeIn();
      } else {
        $('#up-fixed').fadeOut();
      }

      // console.log(windowTopPosition + " windowTopPosition");
      // console.log(windowBottomPosition + " windowBottomPosition");

      $('.process-toggle').each(function() {  
        if ( $(this).offset().top >= windowTopPosition+windowHeight*.333333 && $(this).offset().top <= windowTopPosition+windowHeight*.6666667){$(this).addClass('in-view');} else {$(this).removeClass('in-view');}
      });
      // console.log('scroll event');

    });
          return false;

    // scroll body to 0px on click
    // $('#up-fixed a').click(function () {
    //   $('body,html').fade({
    //     scrollTop: 0
    //   });
    // });


  });



});

$(window).resize(function() {
    if ($(".menu").is(':hidden')){$(".nav").fadeIn(1000);}
  });

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var wh = $(window).height();
  if ($(".parallax").length){
  var $parallax = $(".parallax");

  if ($parallax.offset().top > scroll-wh) { $parallax.css("transform","translateY(" +  (scroll/$parallax.offset().top)*1050  + "px)")};
  }
});

