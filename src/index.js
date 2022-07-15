// import "../sass/theme.scss";

// Our modules / classes
import example from './modules/Example'
import HomeHeader from './modules/HomeHeader'

const MyExample = new example()
const MyHomeHeader = new HomeHeader()

// aos init
AOS.init()
addClassOnScroll()

//? NAv logic
/// add class on scroll
function addClassOnScroll() {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop()
		if (scroll >= 15) {
			// do something
			$('#mainNav').addClass('isSticky')
		} else {
			$('#mainNav').removeClass('isSticky')
		}
	})
}
