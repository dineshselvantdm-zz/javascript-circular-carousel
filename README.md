# javascript-circular-carousel
Circular Carousel using vanilla javascript. 
Very Light weight and size is ~2.4KB. No dependencies.
Compatible with all javascript frameworks like Mithril JS, React JS, Angular JS etc.
requestAnimationFrame() is used for carousel animation. Optimized for browser paint time. Improves page load time.

Require the minified js.

HTML:
<div id = "lite-carousel">
  <ul>
    <div id="prev">Prev</div>
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>
    <div id="next">Next</div>
  <ul>
</div>

Usage in JS: 

For Left Click:-
document.getElementById('prev').addEventListener("click",function(){
  var delay = 500;  //Animation slide time in milliseconds
  var ul_selector = '#lite-carousel ul';  //Pass the ul selector as input 
  var position = 'Left';
  CircularCarousel.shiftCarousel(position,ul_selector,delay);
});

For Right Click:-
document.getElementById('next').addEventListener("click",function(){
  var delay = 500;  //Animation slide time in milliseconds
  var ul_selector = '#lite-carousel ul';  //Pass the ul selector as input 
  var position = 'Right';
  CircularCarousel.shiftCarousel(position,ul_selector,delay);
});

 
