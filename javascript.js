// Navbar
// (function($) {
// 	$(document).ready(function() {
// 		$(function() {
// 			$(window).scroll(function() {
// 				if($(this).scrollTop() > $(".hero").height() - 120) {
// 					$("#page").fadeIn();
// 				}else {
// 					$("#page").fadeOut();
// 				}
// 			});
// 		});
// 	});
// }(jQuery));

//Fixes mobile dropdown menu
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});

// Google Maps
function initMap() {
    var condo = {lat: 20.536905, lng: -86.937264};
    var map = new google.maps.Map(document.getElementById('map'), {
    	center: condo, zoom: 15
    }); 
    var marker = new google.maps.Marker({position: condo, map: map})
}
