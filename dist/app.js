/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
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

function onBlur(){
	promote = document.getElementsByClassName("promote");
	promote.replace("promote","change-promote");

}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xuXG4kKCcueW91ci1jbGFzcycpLnNsaWNrKCk7XG5cbi8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcbi8qKioqKiovIH0pKClcbjtcblxuJChcIi5idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHQkKFwiLmJ0blwiKS50b2dnbGVDbGFzcyhcImNsb3NlLWJ0blwiKTtcblx0JChcIi5tZW51XCIpLnRvZ2dsZUNsYXNzKFwib3Blbi1tZW51XCIpO1xuXHR9KTtcblxuXHQkKGZ1bmN0aW9uKCl7XG5cdFx0JCgnLnNsaWRlcicpLnNsaWNrKHtcblx0XHQgIGF1dG9wbGF5OiB0cnVlLCBcblx0XHQgIGF1dG9wbGF5U3BlZWQ6IDAsXG5cdFx0ICBzcGVlZDogNTAwMCxcblx0XHQgIGNzc0Vhc2U6IFwibGluZWFyXCIsIFxuXHRcdCAgc2xpZGVzVG9TaG93OiA0LCBcblx0XHQgIHN3aXBlOiBmYWxzZSwgXG5cdFx0ICBhcnJvd3M6IGZhbHNlLCBcblx0XHQgIHBhdXNlT25Gb2N1czogZmFsc2UsIFxuXHRcdCAgcGF1c2VPbkhvdmVyOiBmYWxzZSwgXG5cdFx0ICBcblx0XHQgIHJlc3BvbnNpdmU6IFtcblx0XHQgICAge1xuXHRcdFx0YnJlYWtwb2ludDogNzUwLFxuXHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdCAgc2xpZGVzVG9TaG93OiAzLCBcblx0XHRcdH1cblx0XHQgICAgfVxuXHRcdCAgXVxuXHRcdH0pO1xuXHQgICAgfSk7XHRcblxudmFyIGFjY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjb3VudCcpO1xuXG5hY2NvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuXHRhbGVydChcIuOCouOCq+OCpuODs+ODiOODmuODvOOCuOOBuOmBt+enu+OBl+OBvuOBmeOAglwiKTtcbn1cblxuKVxuXG52YXIgY29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xsZWN0aW9uJyk7XG5cbmNvbGxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRhbGVydChcIuOCs+ODrOOCr+OCt+ODp+ODs+ODmuODvOOCuOOBuOmBt+enu+OBl+OBvuOBmeOAglwiKTtcbn1cbilcblxudmFyIGNvbGxlY3Rpb25fYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbGxlY3Rpb25fYm94Jyk7XG5cbmNvbGxlY3Rpb25fYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0dmFyIHB1cmNoYWNlX2RlY2lzaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B1cmNoYWNlX2RlY2lzaW9uJyk7XG5cdHB1cmNoYWNlX2RlY2lzaW9uLmNsYXNzTGlzdC5yZXBsYWNlKCdwdXJjaGFzZV9kZWNpc2lvbicsJ29wZW5fcHVyY2hhc2VfZGVjaXNpb24nKTtcbn1cbilcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==