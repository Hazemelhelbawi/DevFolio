$(document).ready(function(){
    $('#loading').fadeOut(2000,function(){
        $('body').css('overflow','visible')
    })
})

  let scrolOffset = $('#aboutMe').offset().top;
  console.log(scrolOffset);
  $(window).scroll(function(){
    if ($(window).scrollTop() > scrolOffset)
    { $('.navbar').css({'backgroundColor': 'black','transition':'2s'})
    }
    else {
         $('.navbar').css({'backgroundColor': 'transparent'})

    }
    let upScrolOffset = $('header').offset().top;

    if($(window).scrollTop() > upScrolOffset){
        $('#upIcon').fadeIn(1000)
    }
    else{
        $('#upIcon').fadeOut(1000)

    }

    })

    $('#upIcon').click(function(){
        $('body,html').animate({scrollTop: 0},800)
    })

  $('.nav-link').click(function(){
    let currentLink=$(this).attr('href');
    let currentOffset =$(currentLink).offset().top;
    $('body,html').animate({scrollTop: currentOffset},800)
  })