//* Logo page reload
document.querySelector('#navbar__logo').addEventListener('click', () => location.reload());
document.querySelector('#navbar__logo-mb').addEventListener('click', () => location.reload());
document.querySelector('#footer__logo').addEventListener('click', () => location.reload());

//* Burger
const burger = document.querySelector('#burger');
const links = document.querySelector('#navbar__links');
const body = document.querySelector('body');

document.querySelector('#burger').addEventListener('click', () => {
	if(window.innerWidth < 768){
		burger.classList.toggle('active');
		links.classList.toggle('active');
		body.classList.toggle('locked');
	}
})

const anchors = document.querySelectorAll('.anchor');
if(anchors.length > 0 && window.innerWidth < 768){
	anchors.forEach((anchor) => {
		anchor.addEventListener('click', () => {
			burger.classList.toggle('active');
			links.classList.toggle('active');
			body.classList.toggle('locked');
		})
	})
}

anchors.forEach( anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const href = this.getAttribute('href');
		const scrollTarget = document.querySelector(href);
		const topOffset = 100;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		})
	})
})


//* Navbar on scroll
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
	if(scrollY > 20) navbar.classList.add('active');
	else navbar.classList.remove('active');
})


// Header button
let ThirdSpan = document.querySelector('.square-button__third-span');
ThirdSpan.textContent = ThirdSpan.textContent.split('').reverse().join('');
let FourthSpan = document.querySelector('.square-button__fourth-span');
FourthSpan.textContent = FourthSpan.textContent.split('').reverse().join('');


//* Scroll animations
const animItems = document.querySelectorAll('.anim-item');

if(animItems.length > 0){

	window.addEventListener('scroll', animOnScroll);

	function animOnScroll(){
		animItems.forEach((animItem) => {
			const animItemOffset = offset(animItem);
			const animItemHeight = animItem.offsetHeight;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if((scrollY > animItemOffset - animItemPoint) && scrollY < animItemOffset + animItemHeight){
				animItem.classList.add('_active');
			}
		})
	}
	animOnScroll();

	function offset(el){
		const rect = el.getBoundingClientRect();
		return rect.top + window.scrollY;
	}
}

//* To top button
let buttonToTop = document.querySelector('#button-to-top');
buttonToTop.addEventListener('click', () => {
    window.scrollBy({
        top: -20000,
        behavior: 'smooth'})
})

window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        buttonToTop.classList.add('active');
    }
    else{
        buttonToTop.classList.remove('active');
    }
})
