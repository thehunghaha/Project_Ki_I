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
{scrollTop:9660},900);
});
})
// Ẩn hiện thanh search  
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
jssor_1_slider_init = function() {
var jssor_1_SlideshowTransitions = [
{$Duration:800,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
{$Duration:800,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
];
var jssor_1_options = {
$AutoPlay: 1,
$Cols: 1,
$Align: 0,
$SlideshowOptions: {
$Class: $JssorSlideshowRunner$,
$Transitions: jssor_1_SlideshowTransitions,
$TransitionsOrder: 1
},
$ArrowNavigatorOptions: {
$Class: $JssorArrowNavigator$
},
$ThumbnailNavigatorOptions: {
$Class: $JssorThumbnailNavigator$,
$Cols: 5,
$SpacingX: 5,
$SpacingY: 5,
$Align: 390
}
};
var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
/*#region responsive code begin*/
var MAX_WIDTH = 980;
function ScaleSlider() {
var containerElement = jssor_1_slider.$Elmt.parentNode;
var containerWidth = containerElement.clientWidth;
if (containerWidth) {
var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
jssor_1_slider.$ScaleWidth(expectedWidth);
}
else {
window.setTimeout(ScaleSlider, 30);
}
}
ScaleSlider();
$Jssor$.$AddEvent(window, "load", ScaleSlider);
$Jssor$.$AddEvent(window, "resize", ScaleSlider);
$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
/*#endregion responsive code end*/
};



$(function(){
// Configure/customize these variables.
var showChar = 150;  // How many characters are shown by default
var ellipsestext = "...";
var moretext = "Show more >";
var lesstext = "Show less";
var widhtwindow = $(window).width();
var heigthwindow = $(window).height();
var count = 0;
$(window).on('resize',function(){
if($(window).width() < 1000 && count ==0)
{
count = 1;
$('.more').each(function() {
var content = $(this).html();
if(content.length > showChar) {
var c = content.substr(0, showChar);
var h = content.substr(showChar, content.length - showChar);
// console.log(c);

var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
$(this).html(html);
}
});
$(".morelink").click(function(){
if($(this).hasClass("less")) {
$(this).removeClass("less");
$(this).html(moretext);
} else {
$(this).addClass("less");
$(this).html(lesstext);
}
$(this).parent().prev().toggle();
$(this).prev().toggle();
return false;
});
}
else{
// alert($(window).width());
count = 0;
window.location.href='do_an.html';
}
});
});