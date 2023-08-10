// import $ from 'jquery';
// import 'slick-carousel';

$('.your-class').slick();

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	
/******/ 	
/******/ })()
;

$(".btn").on("click", function(){
	$(".btn").toggleClass("close-btn");
	$(".menu").toggleClass("open-menu");
	});

	$(function(){
		$('.slider').slick({
		  autoplay: true, 
		  autoplaySpeed: 0,
		  speed: 5000,
		  cssEase: "linear", 
		  slidesToShow: 4, 
		  swipe: false, 
		  arrows: false, 
		  pauseOnFocus: false, 
		  pauseOnHover: false, 
		  
		  responsive: [
		    {
			breakpoint: 750,
			settings: {
			  slidesToShow: 3, 
			}
		    }
		  ]
		});
	    });	

var account = document.getElementById('account');

account.addEventListener('click', function(){
	console.log("test");
	alert("アカウントページへ遷移します。");
}

)

var collection = document.getElementById('collection');

collection.addEventListener('click', function(){
	alert("コレクションページへ遷移します。");
}
)

var collection_box = document.getElementById('collection_box');

collection_box.addEventListener('click', function(){
	var purchace_decision = document.getElementById('purchace_decision');
	purchace_decision.classList.replace('purchase_decision','open_purchase_decision');
}
)
