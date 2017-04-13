$(document).ready(function() { //always do this first. A special event 
  
  //call the function
    
    //  //mouse interaction
  $('.button-box').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.button-box').mouseout(function(){
    $(this).css('background-color','#DE2A2A');
  });
});