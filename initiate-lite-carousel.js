//For Left Click:-
document.getElementById('prev').addEventListener("click",function(){
  var delay = 500;  //Animation slide time in milliseconds
  var ul_selector = '#lite-carousel ul';  //Pass the ul selector as input 
  var position = 'Left';
  CircularCarousel.shiftCarousel(position,ul_selector,delay);
});

//For Right Click:-
document.getElementById('next').addEventListener("click",function(){
  var delay = 500;  //Animation slide time in milliseconds
  var ul_selector = '#lite-carousel ul';  //Pass the ul selector as input 
  var position = 'Right';
  CircularCarousel.shiftCarousel(position,ul_selector,delay);
});
