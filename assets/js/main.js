/*
Theme Name: Ocean
Version: 1.0.0
Author: Themebasket
Author URI: 
Description: Multi-Purpose Theme by Themebasket
*/

/*	IE 10 Fix*/

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

(function($){
	"use strict";
	
		/* ==============================================
	Preloader
	=============================================== */
	
		$("#preloader").delay(500).fadeOut(4000);
		
		/* ==============================================
	Sticky
	=============================================== */
		try {
			$(".navbar-sticky, .navbar-sticky-bottom").sticky({
				topSpacing: 0,
				className: 'sticky'
			});
			
		} catch (err) {

		}
		/* ==============================================
	ACCORDION TAB
	=============================================== */
	
		$('.collapse').on('shown.bs.collapse', function() {
			$(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
		}).on('hidden.bs.collapse', function() {
			$(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
		});
	
		/* ==============================================
	ACCORDION TAB HEADING COLOR CHANGE
	=============================================== */
	
		$('.collapse').on('shown.bs.collapse', function() {
			$(this).parent().find(".panel-heading").addClass("panel-active");
		}).on('hidden.bs.collapse', function() {
			$(this).parent().find(".panel-heading").removeClass("panel-active")
		});

		/* ==============================================
	MAGNIFIC POPUP
	=============================================== */
	
			$(".image-popup").magnificPopup({
				type: "image",
				closeOnContentClick: false,
				removalDelay: 600,
				fixedContentPos: true,
				fixedBgPos: true,
				mainClass: "my-mfp-slide-bottom",
				image: {
					verticalFit: false
				}
			});
		
		/* ==============================================
	TEAM HOVER EFFECT CUSTOM FUNCTION
	=============================================== */
		// Team ------------------
		$(".service-team-social").css({
			"margin-top": 0 * $(".service-team-social").height() / 2 + "px"
		});
		// content functions ------------------
		$(".service-personal-hover figure").on({
			mouseenter: function(){
				$(this).find(".service-team-social").fadeIn();
				$(this).find(".service-team-social a").each(function(a) {
					var b = $(this);
					setTimeout(function() {
						b.animate({
							opacity: 1,
							top: "0"
						}, 400);
					}, 150 * a);
				});
			},
			mouseleave: function(){
				$(this).find(".service-team-social a").each(function(a) {
					var b = $(this);
					setTimeout(function() {
						b.animate({
							opacity: 0,
							top: "50px"
						}, 400);
					}, 150 * a);
				});
				setTimeout(function() {
					$(this).find(".service-team-social").fadeOut();
				}, 150);
			}
		});
		
		/* ==============================================
	FUN FACTS CUSTOM FUNCTION
	=============================================== */
		try {
	
			$('.touch .fun-number').each(function(){
				var thisNo = $(this).text();
				$(this).animateNumber({number: thisNo},4000);
			});
		
			$('.no-touch .staff-1').waypoint(function() {
				$(this).find('.fun-number').each(function(){
					var thisNo = $(this).text();
					$(this).animateNumber({number: thisNo},4000);
				});
			},{offset: '90%',triggerOnce: true});
	
		} catch (err) {

        }
		
		/* ==============================================
	VERTICAL SKILL BARS
	=============================================== */
		try {
			
			$('.progress-col').waypoint(function() {
			   jQuery('.skillbar').each(function(){
					jQuery(this).find('.skillbar-bar').animate({
						height:jQuery(this).attr('data-percent')
					},2000);
				});
				
				}, { offset: '100%' 
			});	
	
		} catch (err) {

        }
	
		/* ==============================================
	CUBEPORTFOLIO CUSTOM
	=============================================== */		
		// init cubeportfolio
		$('#isotope-container').cubeportfolio({
			filters: '#js-filters-masonry-projects',
			loadMore: '#js-loadMore-masonry-projects',
			loadMoreAction: 'click',
			layoutMode: 'grid',
			
			gridAdjustment: 'responsive',
			mediaQueries: [{
				width: 1500,
				cols: 4
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			defaultFilter: '*',
			animationType: 'rotateSides',
			gapHorizontal: 30,
			gapVertical: 30,
			caption: 'zoom',
			displayType: 'sequentially',
			displayTypeSpeed: 100,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

			// singlePage popup
			singlePageDelegate: '.cbp-singlePage',
			singlePageDeeplinking: true,
			singlePageStickyNavigation: true,
			singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
			singlePageCallback: function(url, element) {
				// to update singlePage content use the following method: this.updateSinglePage(yourContent)
				var t = this;

				$.ajax({
						url: url,
						type: 'GET',
						dataType: 'html',
						timeout: 30000
					})
					.done(function(result) {
						t.updateSinglePage(result);
					})
					.fail(function() {
						t.updateSinglePage('AJAX Error! Please refresh the page!');
					});
			},
		});

		// init cubeportfolio
		$('#isotope-container2').cubeportfolio({
			filters: '#js-filters-masonry-projects',
			loadMore: '#js-loadMore-masonry-projects',
			loadMoreAction: 'click',
			layoutMode: 'grid',
			
			gridAdjustment: 'responsive',
			mediaQueries: [{
				width: 1500,
				cols: 3
			}, {
				width: 1100,
				cols: 3
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			defaultFilter: '*',
			animationType: 'rotateSides',
			gapHorizontal: 30,
			gapVertical: 30,
			caption: 'zoom',
			displayType: 'sequentially',
			displayTypeSpeed: 100,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

			// singlePage popup
			singlePageDelegate: '.cbp-singlePage',
			singlePageDeeplinking: true,
			singlePageStickyNavigation: true,
			singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
			singlePageCallback: function(url, element) {
				// to update singlePage content use the following method: this.updateSinglePage(yourContent)
				var t = this;

				$.ajax({
						url: url,
						type: 'GET',
						dataType: 'html',
						timeout: 30000
					})
					.done(function(result) {
						t.updateSinglePage(result);
					})
					.fail(function() {
						t.updateSinglePage('AJAX Error! Please refresh the page!');
					});
			},
		});

	
	/* ==============================================
	GOOGLE MAP DEFAULT STYLE
	=============================================== */		
		$('#map').gmap3({
			map:{
			options:{
				center:[40.727537, -74.021768],
				zoom: 14,
				scrollwheel:false,
				styles: 
				[
					{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},
					{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},
					{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
					{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},
					{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},
					{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
					{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
					{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20},{"saturation":-100}]},
					{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ededed"},{"lightness":20},{"saturation":-97}]}
				]
			}
		  },
		  marker:{
			values:[
			  {address:"40.731798,-74.0649028", data:"Poitiers : great city !", options:{icon: "assets/images/marker.png"}},
			  {address:"40.7212177,-74.0310034", data:"Perpignan ! <br> GO USAP !", options:{icon: "assets/images/marker-1.png"}}
			],options:{
				  draggable: false
				}
			}
		});
			/* ==============================================
	GOOGLE MAP STYLE TWO
	=============================================== */		
		$('#map-1').gmap3({
			map:{
			options:{
				center:[40.7302592,-74.0698909],
				zoom: 14,
				scrollwheel:false,
				styles: 
				[
					{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},
					{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},
					{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
					{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},
					{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},
					{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
					{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
					{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20},{"saturation":-100}]},
					{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ededed"},{"lightness":20},{"saturation":-97}]}
				]
			}
		  },
		  marker:{
			values:[
			  {address:"40.731798,-74.0649028", data:"Poitiers : great city !", options:{icon: "assets/images/marker.png"}},
			  {address:"40.7212177,-74.0310034", data:"Perpignan ! <br> GO USAP !", options:{icon: "assets/images/marker-1.png"}}
			],options:{
				draggable: false
				}
			}
		});
	
		/* ==============================================
	GOOGLE MAP STYLE THREE
	=============================================== */		
		$('#map1').gmap3({
			map:{
			options:{
				center:[40.7302592,-74.0698909],
				zoom: 14,
				scrollwheel:false,
				styles: 
				[
					{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},
					{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},
					{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
					{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},
					{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},
					{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
					{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
					{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20},{"saturation":-100}]},
					{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ededed"},{"lightness":20},{"saturation":-97}]}
				]
			}
		  },
		  marker:{
			values:[
			  {address:"40.731798,-74.0649028", data:"Poitiers : great city !", options:{icon: "assets/images/marker.png"}},
			  {address:"40.7212177,-74.0310034", data:"Perpignan ! <br> GO USAP !", options:{icon: "assets/images/marker-1.png"}}
			],options:{
				draggable: false
				}
			}
		});
		
		/* ==============================================
	REVOLUTION CUSTOM FUNCTION
	=============================================== */	
		if($("#rev_slider_4_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_4_1");
		}else{
			$("#rev_slider_4_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"../../revolution/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:6000,
				navigation: {
							keyboardNavigation: "on",
							keyboard_direction: "horizontal",
							mouseScrollNavigation: "off",
							onHoverStop: "off",
							touch: {
								touchenabled: "on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							arrows: {
								style: "hesperiden",
								enable: true,
								hide_onmobile: false,
								hide_onleave: true,
								tmp: '',
								left: {
									h_align: "center",
									v_align: "bottom",
									h_offset: -25,
									v_offset: 50
								},
								right: {
									h_align: "center",
									v_align: "bottom",
									h_offset: 25,
									v_offset: 50
								}
							}
						},
				responsiveLevels:[1240,1024,778,480],
				gridwidth:[1400,1240,778,480],
				gridheight:[500,500,500,500],
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
		
		/* ==============================================
	NAV TOP SECTION ON SCROLL HIDE FUNCTION
	=============================================== */
		$(window).on("scroll", function() {
			if ($(this).scrollTop() > 0){
				$(".index-top-section").slideUp("slow");
			}else{
				$(".index-top-section").slideDown("slow");
			}
		});
		
		/* ==============================================
	NAV TOP SECTION ON SCROLL HIDE FUNCTION
	=============================================== */	
		$('.author-detail a').smoothScroll({
			speed: 1000,
			easing: 'swing',
			offset: -70
		});
		
		/* ==============================================
	SERVICE SLIDE
	=============================================== */
		
		$(".service-slide").owlCarousel({
			items: 1,
			navigation: false,
			pagination: true,
			singleItem:true,
			autoPlay: true,
			slideSpeed: 100
		});
		
		/* ==============================================
	CLIENT LOGO SLIDE
	=============================================== */
		
		$(".client-logo").owlCarousel({
			items: 8,
			itemsDesktop : [1199,6],
			itemsDesktopSmall : [992,4],
			itemsTablet: [768,3],
			itemsTabletSmall: false,
			itemsMobile : [479,2],
			margin:10,
			navigation: false,
			pagination: false,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 5
		});
		
		/* ==============================================
	CLIENT LOGO SLIDE TWO
	=============================================== */
		
		$(".client-logo-2").owlCarousel({
			items: 6,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,3],
			itemsTabletSmall: [580,2],
			itemsMobile : [479,2],
			margin:10,
			navigation: false,
			pagination: false,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 5
		});
			
		/* ==============================================
	TESTIMONIAL SLIDE
	=============================================== */
		
		$(".testimonial-slide").owlCarousel({
			items: 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			margin:0,
			navigation: false,
			pagination: false,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 5
		});
		
		/* ==============================================
	HISTORY SLIDE
	=============================================== */
		
		$(".history-slide").owlCarousel({
			items: 4,
			itemsDesktop : [1199,2],
			itemsDesktopSmall : [992,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			margin:10,
			navigation: false,
			navigationText:	false,
			pagination: false,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 5
		});
		
		/* ==============================================
	RELATED ITEM SLIDE
	=============================================== */
		
		$(".related-item-slide").owlCarousel({
			items: 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			pagination: true,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 100
		});
		
		/* ==============================================
	CLIENT SAY SLIDE SLIDE
	=============================================== */
		$(".clients-say-slide").owlCarousel({
			items: 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [992,3],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: true,
			navigationText:	false,
			pagination: false,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 100
		});
		
		/* ==============================================
	INDEX3 CLIENT SAY SLIDE SLIDE
	=============================================== */
		
		$(".index3-client-slide").owlCarousel({
			items: 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			navigationText:	false,
			pagination: false,
			singleItem:false,
			autoPlay: true,
			transitionStyle : "backSlide",
			slideSpeed: 100
		});
		
		/* ==============================================
	TEAM PROJECTS SLIDE
	=============================================== */
	
		$(".team-projects").owlCarousel({
			items: 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			navigationText:	false,
			pagination: false,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 100
		});
		
})(jQuery);	
	
		
	