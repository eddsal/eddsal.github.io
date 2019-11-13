// Modal Image Gallery

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}






window.onload = function(){



  $(".toggle").click(function() {
    $( ".menu" ).stop().slideToggle( "slow" );
  });
  $(".menu li a").click(function() {
    $( ".menu" ).stop().slideToggle( "slow" );
    $('#nav-icon2').toggleClass('open');
  });

  $('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});




  $(".pole_direc").click(function(){
    $('.hover_bkgr_fricc').show();
 });
 $('.hover_bkgr_fricc').click(function(){
     $('.hover_bkgr_fricc').hide();
 });
 $('.popupCloseButton').click(function(){
     $('.hover_bkgr_fricc').hide();
 });

 
}