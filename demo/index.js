//Velocity.js
var counter = 0;

function reverseVel($el) {
  $el.velocity("stop");
  $el.velocity('reverse');
}

$(".cer_line").velocity( { 'stroke-dashoffset': 400 }, {duration: 0});
$('.st89').mouseenter(function(){
   $(".cer_poly").velocity( "transition.fadeIn",{stagger: 19, duration:200});
   $(".cer_line").velocity({ 'stroke-dashoffset': 0 }, {duration: 300});
   $(".cer_text1").velocity( "transition.fadeIn", {delay:300});
//  $(".right-1").velocity({"stroke-dasharray": 0}, {duration: 500});
  $(".right-2").velocity({"stroke-dasharray": 0}, {duration: 500});
  $(".right-3").velocity({"stroke-dasharray": 0}, {duration: 500});
  $(".right-4").velocity({"stroke-dasharray": 0}, {duration: 500});
  $(".right-5").velocity({"stroke-dasharray": 0}, {duration: 500});
  $(".right-6").velocity({"stroke-dasharray": 0}, {duration: 500});
  $(".right-7").velocity({"stroke-dasharray": 0}, {duration: 500});
}).mouseleave(function () {
//    $(".right-1").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-2").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-3").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-4").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-5").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-6").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-7").velocity({"stroke-dasharray": 5}, {duration: 500});
   reverseVel($(".cer_poly, .cer_line, .cer_text1, .cer_text2"));
});

$('.st89').click(function(){
   counter = (counter + 1) % 2
//    $(".right-1").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".cer_text1").velocity( "transition.fadeOut", {delay:300});
    $(".cer_text2").velocity( "transition.fadeIn", {delay:300});
    $(".right-2").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-3").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-4").velocity({"stroke-dasharray": 0}, {duration: 500});
    $(".right-5").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-6").velocity({"stroke-dasharray": 5}, {duration: 500});
    $(".right-7").velocity({"stroke-dasharray": 5}, {duration: 500});
});

$(".anterior_line").velocity( { 'stroke-dashoffset': 400 }, {duration: 0});
$('.st90').mouseenter(function(){
      $(".anterior_poly").velocity( "transition.fadeIn",{stagger: 19, duration:200});
   $(".anterior_line").velocity({ 'stroke-dashoffset': 0 }, {duration: 300});
  $(".anterior_text").velocity( "transition.fadeIn", {delay:300});
      }).mouseleave(function () {
   reverseVel($(".anterior_poly, .anterior_line, .anterior_text"));
});

$(".parietal_line").velocity( { 'stroke-dashoffset': 400 }, {duration: 0});
$('.st91').mouseenter(function(){
      $(".parietal_poly").velocity( "transition.fadeIn",{stagger: 19, duration:200});
   $(".parietal_line").velocity({ 'stroke-dashoffset': 0 }, {duration: 300});
  $(".parietal_text").velocity( "transition.fadeIn", {delay:300});
      }).mouseleave(function () {
   reverseVel($(".parietal_poly, .parietal_line, .parietal_text"));
});

$(".temporal_line").velocity( { 'stroke-dashoffset': 400 }, {duration: 0});
$('.st92').mouseenter(function(){
      $(".temporal_poly").velocity( "transition.fadeIn",{stagger: 19, duration:200});
   $(".temporal_line").velocity({ 'stroke-dashoffset': 0 }, {duration: 300});
  $(".temporal_text").velocity( "transition.fadeIn", {delay:300});
      }).mouseleave(function () {
   reverseVel($(".temporal_poly, .temporal_line, .temporal_text"));
});

$(".occipital_line").velocity( { 'stroke-dashoffset': 400 }, {duration: 0});
$('.st93').mouseenter(function(){
   $(".occipital_poly").velocity( "transition.fadeIn",{stagger: 19, duration:200});
   $(".occipital_line").velocity({ 'stroke-dashoffset': 0 }, {duration: 300});
  $(".occipital_text").velocity( "transition.fadeIn", {delay:300});
      }).mouseleave(function () {
   reverseVel($(".occipital_poly, .occipital_line, .occipital_text"));
});

$(".frontal_line").velocity( { 'stroke-dashoffset': 400 }, {duration: 0});
$('.st94').mouseenter(function(){
      $(".frontal_poly").velocity( "transition.fadeIn",{stagger: 19, duration:200});
   $(".frontal_line").velocity({ 'stroke-dashoffset': 0 }, {duration: 300});
  $(".frontal_text").velocity( "transition.fadeIn", {delay:300});
      }).mouseleave(function () {
   reverseVel($(".frontal_poly, .frontal_line, .frontal_text"));
});

$("svg").find("g#right").click(function(){
    alert( "Handler for .click() called." );
});
