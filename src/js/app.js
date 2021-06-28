const Secciones = new fullpage ("#fullpage", {
    licenseKey: 'GPLv3',
    autoScrolling: true, 
	fitToSection: false, 
	fitToSectionDelay: 300, 
	easing: 'easeInOutCubic', 
	scrollingSpeed: 600, 
	css3: true, 
	easingcss3: 'ease-out', 
	loopBottom: true,


	navigation: true, 
	menu: '#menu', 
	anchors: ['inicio', 'nosotros', 'productos','contacto'], 
	navigationTooltips: ['Inicio', 'Nosotros', 'Productos','Contacto'], 
	showActiveTooltip: false, 


	sectionsColor : ['#009D13 ', '#76be84', '#C84B31','#C84B31'],
	verticalCentered: true, 
});

window.sr = ScrollReveal ();
	sr.reveal('.nav', {
		duration: 3000,
		origin: 'bottom',
		distance: '-100px',
	});

	sr.reveal('.contenedor__texto', {
		duration: 4000,
		delay: 200,
		origin: 'rigth',
		distance: '150%',
	});

document.addEventListener("DOMContentLoaded", function(){
	overlay();
})

function overlay () {
	const btn = document.querySelector("#btn-suscribirme");

	btn.addEventListener("click", () => {
		const overlay = document.querySelector(".overlay");
		overlay.classList.add("overlay-active");
		const form = document.querySelector(".form_wrap");
		overlay.appendChild(form);
		form.classList.add("overlay-active");

		//boton close 
		 const btnClose = document.querySelector("#btn-close");
		 btnClose.addEventListener("click", ()=> {
			 overlay.classList.remove("overlay-active");
		 } )
	});
}