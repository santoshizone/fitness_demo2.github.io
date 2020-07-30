 



 mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


  $(document).ready(function(){

  $('.sec2_col1').waypoint(function(direction){

  	$('.sec2_col1').addClass(' animated fadeInDown')
  	$('.sec2_col2').addClass(' animated fadeInDown')
    $('.sec2_col3').addClass(' animated fadeInUp')
    $('.sec2_col4').addClass('animated fadeInUp')

   
  },{
    offset:'30%'
  })




$('.caption1').waypoint(function(direction){

  	$('.caption1').addClass(' animated fadeInLeft')
  	
   
  },{
    offset:'30%'
  })

$('.sec3_col2').waypoint(function(direction){

  	$('.sec3_col2').addClass(' animated fadeInRight')
  	
   
  },{
    offset:'40%'
  })


$('.sec4_col1').waypoint(function(direction){

  	$('.sec4_col1').addClass(' animated slideInLeft')
    $('.sec4_col2').addClass(' animated slideInDown')
    $('.sec4_col3').addClass('animated slideInDown')
    $('.sec4_col4').addClass('animated slideInRight')
  },{
    offset:'40%'
  })





$('.image_box_div1').waypoint(function(direction){

  	$('.image_box_div1').addClass(' animated slideInUp')
    $('.image_box_div2').addClass(' animated slideInUp')
    $('.image_box_div3').addClass('animated slideInUp')
    
  },{
    offset:'50%'
  })



$(function () {
        
            $("#dialog").dialog({
                modal: true,
                title: "jQuery Dialog",
               width: 300,
                height: 150,
                open: function (event, ui) {
                    setTimeout(function () {
                        $("#dialog").dialog("close");
                    }, 10000);
                }
            });
        });
 
  




});



      



  