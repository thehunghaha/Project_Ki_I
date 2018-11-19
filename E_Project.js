




// Hiện ẩn hộp thoại 

      $(document).ready(function(){
      
         $('#live_chat2').click(function(){
         $('.box').show('slow');
         });
         $('.close').click(function(){
         $('.box').hide('slow');
         })
       });

// Export tin nhắn
      $(document).ready(function(){
         $("#send").click(function(){
         var c = document.getElementById('text_typed').value;
         if(c!="")
         {
         $("#chat_area").append('<div style="margin-top: 16px;">'+'<div style="border: 1px solid #b8e0d8; text-align:center; max-width:300px; height:auto; overflow: auto; margin-left: 0px; background-color: white; padding: 10px 10px; border-radius: 15px 0 15px 0; font-weight:500;">'+$('#text_typed').val()+'</div>'+'</div>');
         
         document.getElementById('text_typed').value="";   //reset value in form after send message
         }
         })
       });









  
// Hiện / ẩn thanh search_form

  $(document).ready(function(){
       $('#search_icon').click(function(){
       $('#search_form').show();
       $('#search_icon').hide();
       $('#close_search_form').show();
       })
       $('#close_search_form').click(function(){
       $('#search_form').hide();
       $('#close_search_form').hide();
       $('#search_icon').show();
       })
  })

//////////////// Load progress bar ////////////////////////

  $(document).ready(function(){
      window.onscroll = function() {myFunction()};
      function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
      }
      })









//////////// affective oncrolling //////////////////

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  



  // phần hiệu ứng khi loa trnag lần đầu

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})


/////////////////////////////////////////////////////////////////



// ẩn back to top & back to bottom khi lên đầu trang
    $(function(){

    $(window).scrollTop(function(){

    if($(this).scroll()!=0){
      $('.myBtnq').fadeIn(1111);
    }else{
      $('.myBtnq').fadeOut(1111);
      }
    });

    $('#myBtn').click(function(){
    $('body,html').animate(
    {scrollTop:0},400);
      });
    $('#myBtn2').click(function(){
    $('body,html').animate(
    {scrollTop:14660},700);
      });
    })
  


/////////////////////google map//////////////////////


