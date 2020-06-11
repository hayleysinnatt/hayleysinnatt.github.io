$( document ).ready(function() {
    
 $( function() {
    $( ".drag-image").draggable();
  } );


  $(".menu").click(function () {
    $(".essay").addClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function () {
    $(".essay").removeClass("slide");
    $(".close").removeClass("show");
  });










 
});