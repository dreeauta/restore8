$(document).ready(function () {


  $('#bgvid').addClass('animated');


// menu toggle

$("#menu a").on("click", function(){
  $("#menuToggle input").prop("checked", false);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// $('document').on("click", function(e){
//
//   if ( $("#menuToggle input").is(':checked') && !($(this).hasId('menu')) && !($(this).hasClass('checkbox'))) {
//     $("#menuToggle input").prop("checked", false);
//   }
// });


$( window ).scroll(function() {

  if ($("#menuToggle input").is(':checked')){
    $("#menuToggle input").prop("checked", false);
  }
});


// project overlay

// $(".project-container:not('.no-overlay')").on("click", function(e){
//   // e.preventDefault();

//   $(this).nextAll('.project-overlay').eq(0).addClass("show");
//   $(this).next('.overlay-bg').addClass("show");

// });

// $(".exit").on("click", function(){
//   $(".project-overlay").removeClass("show");
//   $('.overlay-bg').removeClass("show");

// });



  // fade in skills

// var skills = $(".skills-wrapper").offset().top;
// var skillsText = $(".skills li div");
//
// $(document).scroll(function() {
//   if($(this).scrollTop() > skills - 300) {
//     $(".skills").show();
//   }
// })


// fade in projects


// var project = $('.project-wrapper').offset().top,
//     $window = $(window);
// $(".project-container").hide();
//
// $window.scroll(function() {
//     if ( $window.scrollTop() >= project - 300) {
//       $('.project-container').each(function(index){
//         $(this).delay(250 * index).fadeIn(250);
//       });
//     }
// });




// var about = $(".about-wrapper").offset().top;
// $( ".about-container" ).hide();
//
// $(document).scroll(function() {
//     if($(this).scrollTop() > 1800 ) {
//       $(".about-container").delay(1000).fadeIn(2000);
//     }
// });


// contact form

  $(".submit").on("click", function(e){

    var name = $(".name").val();
    var email = $(".email").val();
    var number = $(".number").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    // stausElm.append('');

    if (!email.length > 5 && !email.includes("@") && !email.includes('.')) {
      stausElm.append('Email is not valid');
      e.preventDefault();
    }

    if (message.length < 5) {
      stausElm.append('Message is not valid');
      e.preventDefault();
    }


  });


  const playButtons = document.querySelectorAll('.video-play-btn');

  playButtons.forEach(button => {
    const video = button.previousElementSibling;

    button.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        button.style.display = 'none';
      }
    });

    video.addEventListener('ended', () => {
      button.style.display = 'block';
    });
  });


  const swiper = new Swiper('.demo-apps', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });
  

  const projectSwiper = new Swiper('.project-swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  


});


