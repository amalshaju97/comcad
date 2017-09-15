


var app = angular.module("Kollara", ["firebase","ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "Templates/home.html",
		
    })
    .when("/services", {
        templateUrl : "Templates/services.html",
    })
    .when("/about", {
        templateUrl : "Templates/about.html"
    })
    .when("/contact", {
        templateUrl : "Templates/contact.html"
    });
})


	.controller("homeControl", function($scope,$firebaseArray) {
	
   

$( document ).ready(function(){
    
	 $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, 
      onClose: function(el) { /* Do Stuff*/ }, 
    }
  );
  
    $
   
    
	
	 $('.slider').slider();
	 
		 $('.collapsible').collapsible();
		    $('ul.tabs').tabs();
    
	
   
        

});


	
	




		

});





