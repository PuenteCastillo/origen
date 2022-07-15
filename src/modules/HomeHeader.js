import $ from 'jquery'

class HomeHeader {
	//? 1. describe and create/initiate our object

	constructor() {
		//Verables
		this.events()
	}

	//?events
	events() {
		let myObj = this

		$(document).ready(function () {
			myObj.HomeHeaderFunction()
			myObj.slickCarousel()
		})
	}

	//? 3. methods (functions)
	HomeHeaderFunction() {
		console.log('Hello world')
	}
	// slick carousel init
	slickCarousel() {
		$('.galleryImages').slick({
			dots: false,
			infinite: true,
			speed: 1000,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: 'linear',
		})
		$('#slickNext').click(function () {
			$('.galleryImages').slick('slickNext')
		})
		$('#slickPrev').click(function () {
			$('.galleryImages').slick('slickPrev')
		})
	}
}

export default HomeHeader
