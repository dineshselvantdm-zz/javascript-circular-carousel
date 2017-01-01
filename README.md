# javascript-circular-carousel
Circular Carousel using vanilla javascript. 
Very Light weight and size is ~2.5KB. No dependencies.
Compatible with all javascript frameworks like Mithril JS, React JS, Angular JS etc.
requestAnimationFrame() is used for carousel animation. Optimized for browser paint time.

Require the minified js.

HTML:
<div id = "lite-carousel">
  <ul>
    <div id="prev">Prev</div>
    <li>
    <li>
    <li>
    <div id="next">Next</div>
  <ul>
</div>

Usage in JS: 

For Left Click:-
document.getElementByID('prev').addEventListener("click",function(){
  var delay = 500;  //Animation slide time in milliseconds
  var ul_selector = '#lite-carousel ul';  //Pass the ul selector as input 
  var position = 'Left';
  CircularCarousel.shiftCarousel(position,ul_selector,delay);
});

For Right Click:-
document.getElementByID('next').addEventListener("click",function(){
  var delay = 500;  //Animation slide time in milliseconds
  var ul_selector = '#lite-carousel ul';  //Pass the ul selector as input 
  var position = 'Right';
  CircularCarousel.shiftCarousel(position,ul_selector,delay);
});

 
