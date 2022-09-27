$(document).ready(function(){
   
    
//  $("#member_login").click(function () {
//   $("#loginModal").modal("hide");
//  })

 

 $("#owl-example").owlCarousel({
    
    items : 3,
    pagination : true,
    paginationSpeed : 1000,
    navigation : true,
    navigationText : ["","<i class='fa fa-angle-right'></i>"],
    slideSpeed : 800,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
 });

	$("#navigation").sticky({
		topSpacing : 80,
	});

	// $('#nav').onePageNav({
	// 	currentClass: 'current',
	// 	changeHash: false,
	// 	scrollSpeed: 15000,
	// 	scrollThreshold: 0.5,
	// 	filter: '',
	// 	easing: 'easeInOutExpo'
	// });

    //  $('#top-nav').onePageNav({
    //      currentClass: 'active',
    //      changeHash: true,
    //      scrollSpeed: 1200
    // });
//Initiat WOW JS
    new WOW().init();


    
});





// $("#member_login").click(function () {
//     $("#loginModal").modal('show');
// });

//   $("#loginButton").click(function () {
//     $("#loginModal").modal("hide");
//   })


