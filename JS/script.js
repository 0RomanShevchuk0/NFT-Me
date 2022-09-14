//* Logo page reload
document.querySelector('#navbar__logo').addEventListener('click', () => location.reload());
document.querySelector('#navbar__logo-mb').addEventListener('click', () => location.reload());
document.querySelector('#footer__logo').addEventListener('click', () => location.reload());

//* Burger
const burger = document.querySelector('#burger');
const links = document.querySelector('#navbar__links');
const body = document.querySelector('body');

document.querySelector('#burger').addEventListener('click', () => {
	burger.classList.toggle('active');
	links.classList.toggle('active');
	body.classList.toggle('locked');
})

const anchors = document.querySelectorAll('.anchor');
if(anchors.length > 0){
	anchors.forEach((anchor) => {
		anchor.addEventListener('click', () => {
			burger.classList.toggle('active');
			links.classList.toggle('active');
			body.classList.toggle('locked');
		})
	})
}

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

