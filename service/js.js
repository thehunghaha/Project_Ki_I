 $(document).ready(function(){
      
      // Handling sundry
      
      var d = new Date();
      
      var curr_day = d.getDate();
      var curr_month = d.getMonth();
      var curr_year = d.getFullYear();
      
      var curr_hour = d.getHours();
      var curr_min = d.getMinutes();
      var curr_sec = d.getSeconds();
      var count_x = 0;
      curr_month++; 
      
      getdaynow = curr_day + "/" + curr_month + "/" + curr_year;
      
      
      //----------------------------------
      var count5 = 0;
      var count4 = 0;
      var count3 = 0;
      var count2 = 0;
      var count1 = 0;
      var count_like = 0;
      $("#write_comment").click(function() {
          $("#popup").show(1000);
      });
      $("#hide").click(function() {
          $("#popup").hide(1000);
      });
      ///<!--------------------------------------SHOW_SATR-------------------------->
      $(function() {
      
          $('#stars li').on('mouseover', function() {
              var onStar = parseInt($(this).data('value'), 10); 
               // console.log( $(this).parent().children('li.star'));
              $(this).parent().children('li.star').each(function(e) {
      
                  if (e < onStar) {
                      $(this).addClass('hover');
                  } else {
                      $(this).removeClass('hover');
                  }
              });
      
          }).on('mouseout', function() {
              $(this).parent().children('li.star').each(function(e) {
                  $(this).removeClass('hover');
              });
          });
      
      
          $('#stars li').on('click', function() {
              var onStar = parseInt($(this).data('value'), 10);
              var stars = $(this).parent().children('li.star');
              // console.log($(this).parent().children('li.star'));
              for (i = 0; i < stars.length; i++) {
                  $(stars[i]).removeClass('selected');
              }
      
              for (i = 0; i < onStar; i++) {
                  $(stars[i]).addClass('selected');
              }
      
              $('#action_respont').click(function(){
                  for (var i = 0; i < stars.length; i++) {
                      $(stars[i]).removeClass('selected');
                  }
              });
        count_x = parseInt($('#stars li.selected').last().data('value'), 10);
      
          });
      
      });
      
      
      
      //<!--- COUNT STAR------------------------------------------------------------------ -->
      
      
      $(function() {       
            $('input[name=action_respont]').click(function() {
          if(count_x > 0){
              $('.star_show p').first().html('<span class="starsd">'+parseInt($('#stars li.selected').last().data('value'), 10)+'</span>');
              $('span.starsd').first().starsd();
              count_x = 0;
            }
            }); 
          });
          $.fn.starsd = function() {
            return $(this).html($('<span/>').width(Math.max(0, (Math.min(5, parseFloat($(this).html())))) * 16));
          }
      
      
      
      //<!----------------APPEND QUESTION--------------------------------------->
      $(function() {
          $("#respond").click(function() {
              count_like = 0;
              var icon_question = $('input[name=input_question]').val();
              if(icon_question != '')
              {
              $("#append_question").append("<li><div class='row row1' >" +
                  "<div class='col-sm-2 col-xs-2 col1'>" +
                  "<p style='margin: 0;'>" + count_like + "</p>" +
                  "<p style='font-size: 13px;'>Like</p>" +
                  "</div>" +
                  "<div class='col-sm-10 col-xs-10'>" +
                  "<h6 style='margin: 0;'>" + icon_question + "</h6>" +
                  "<p style='margin: 5px; font-size: 15px;  color: #706f6f;'>Hello . I'm Lucy</p>" +
                  "<p style='font-size: 12px; margin: 5px; color:#706f6f; '>JADON Reply " + getdaynow + "</p>" +
                  "<div>" +
                  "<a href='' class='icon_question_like' ><i class='fa fa-thumbs-o-up' aria-hidden='true'>" +
                  "</i><span style='font-size: 14px; margin-left: 5px;'>Like</span></a>" +
                  "<a href=''  class='icon_question_rep'><i class='fa fa-reply' aria-hidden='true'>" +
                  "</i><span style='font-size: 14px; margin-left: 5px;'>Reply</span></a>" +
                  "</div>" +
                  "</div>" +
                  "</div></li>"
              );
              $('input[name=input_question]').val('');
        }
        else{
          alert("You not inport full information!");
        }
              $(".icon_question_like").click(function(e) {
              e.preventDefault();
                  count_like = count_like + 1;
                  if (count_like == 1) {
                      $(this).parents("li").children().first().find("p").first().empty();
                      $(this).parents("li").children().first().find("p").first().append(count_like);
                      $(this).addClass("like");
                  }
                  count_like = 0;
                  $(".like").click(function(e) {
              e.preventDefault();
                      $(this).removeClass("like");
                      $(this).parents("li").children().first().find("p").first().empty();
                      $(this).parents("li").children().first().find("p").first().append(count_like);
                  });
              });
      
      
      
      
          });
      
      });
      
      
      //<--------------------------------------APPEND RATING------------------->
      
      $('input[name=action_respont]').on('click', function(event) {
      
          event.preventDefault();
          var name = $("#user_name").val();
          var title = $("#title_comment").val();
          var textarea = $("#textarea").val();
      if(name != '' && title != '' && textarea != '' && count_x != '0')
    {
              var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
              if (ratingValue == 5) {
                  count5 += 1;
              } else if (ratingValue == 4) {
                  count4 += 1;
              } else if (ratingValue == 3) {
                  count3 += 1;
              } else if (ratingValue == 2) {
                  count2 += 1;
              } else if (ratingValue == 1) {
                  count1 += 1;
              }
      
              total = count1 + count2 + count3 + count4 + count5;
      
              centcout5 = (count5 / total) * 100 + "%";
              centcout4 = (count4 / total) * 100 + "%";
              centcout3 = (count3 / total) * 100 + "%";
              centcout2 = (count2 / total) * 100 + "%";
              centcout1 = (count1 / total) * 100 + "%";
      
          var styles5 = {
              width: centcout5,
              height: "18px",
              backgroundColor: "#4CAF50"
          };
          var styles4 = {
              width: centcout4,
              height: "18px",
              backgroundColor: "#2196F3"
          };
          var styles3 = {
              width: centcout3,
              height: "18px",
              backgroundColor: "#00bcd4"
          };
          var styles2 = {
              width: centcout2,
              height: "18px",
              backgroundColor: "#ff9800"
          };
          var styles1 = {
              width: centcout1,
              height: "18px",
              backgroundColor: "#f44336"
          };
          $("#green").css(styles5);
          $("#blue").css(styles4);
          $("#light_blue").css(styles3);
          $("#oranges").css(styles2);
          $("#red").css(styles1);
          $(".total-review-point").empty();
          $(".count_comment").empty();
          $(".rating-box").empty();
      
          $(".rating-box").append("<p id='star_medium'></p>");
          //$("#bar-5:first").addClass("green");
          // if(name!='' || title!='' || textarea!='' ){
          // for(var i = 1 ; i<= 5 ; i++){
          //}
      
          $("#append").prepend("<div class='item'>" +
              "<div class='row'>" +
              '<div class="col-sm-2" style="text-align: center;">' +
              '<img src="../luffy.png" width="65px;">' +
              '<p class="user">' + name + '</p>' +
              '</div>' +
      
              '<div class="col-sm-10">' +
              '<span class="star_show">' +
              '<p style="margin:0px;"></p>' +
      
              '</span>' +
              '<p class="review">' + title + '</p>' +
      
              '<p class="buy_already">' +
              '<i style="margin-right: 10px; color:#0a7203" class="fa fa-unlock-alt" aria-hidden="true">' +
              '</i>You bought this at JaDON</p>' +
              '<div class="description">' +
              '<p class="review_detail">' +
              '<span>' + textarea + '</span>' +
              '</p>' +
              '</div>' +
              '<div class="link">' +
              '<p class="review_action">' +
              '<a class="share" href="#">Reply this </a>' +
              '<a class="share" href="#">Share facebook</a>' +
              '</p>' +
              '<b style="display:none; margin-left:10px;">You thanked this comment</b>' +
              '<span>This comment is helpful to you?</span>' +
              '<button class="btn btn-primary thank-review">' +
              ' &nbsp  &nbsp  &nbsp  &nbspThank You</button>' +
              '<div class="clear"></div>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>');
      
      
      
      
          medium = parseFloat(5 * (count5 * 5 + count4 * 4 + count3 * 3 + count2 * 2 + count1 * 1) / (total * 5));
          roundingmedium = Math.round(medium * 1000) / 1000;
          // console.log(roundingmedium);
      
          $(".total-review-point").append(roundingmedium + "/5");
          $(".count_comment").append("(There are " + total + " reviews)");
      
      
          $("#user_name").val('');
          $("#title_comment").val('');
          $("#textarea").val('');
          }
          else{
              alert("You have not entered all information yet");
          }
      
      
          $(".thank-review").click(function() {
              $(this).hide();
              $(this).parent().find("span").hide();
              $(this).parent().find("b").show();
      
          });
      
          //}
      
      
      });
      
      
      //----------------------------------Sử lí star medium------------------------        
          $(function() {
              $('input[name=action_respont]').click(function() {
                  $('.rating-box p').first().html('<span class="starsdd">' + parseInt($('#stars li.selected').last().data('value'), 10) + '</span>');
                  $('span.starsdd').first().starsdd();
              });
          });
          $.fn.starsdd = function() {
              return $(this).html($('<span/>').width(Math.max(0, (Math.min(5, roundingmedium))) * 16));
          }
      
          
      
      
      });