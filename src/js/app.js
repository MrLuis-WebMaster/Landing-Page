
document.addEventListener("DOMContentLoaded", function(){
	const Secciones = new fullpage ("#fullpage", {
		licenseKey: '',
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
	overlay();
	MenuMobile();
	validacion();
})

function overlay () {
	const btn = document.querySelector("#btn-suscribirme");

	btn.addEventListener("click", () => {
		const overlay = document.querySelector(".overlay");
		overlay.classList.add("overlay-active");
		const form = document.querySelector(".form_wrap");
		overlay.appendChild(form);
		form.classList.add("overlay-active");

		const nav = document.querySelector(".nav");
		nav.style.visibility = "hidden";

		//boton close 
		 const btnClose = document.querySelector("#btn-close");
		 btnClose.addEventListener("click", ()=> {
			 overlay.classList.remove("overlay-active");
			 nav.style.visibility = "visible";

		 } )
	});
}

function MenuMobile () {
	const menuBurguer = document.querySelector(".menu-mobile");
	menuBurguer.addEventListener("click", () => { 
		const menu = document.querySelector(".menu");
		menu.classList.toggle("menu-active");
	});

}

const DatosForm  =  {
	nombre : "",
	celular : "",
	email : "",
	mensaje : "",
}

const nombre = document.querySelector("#nombre"),
	  celular = document.querySelector("#celular"),
	  email = document.querySelector("#email"),
	  mensaje = document.querySelector("#mensaje");	


nombre.addEventListener("input",leertexto);
celular.addEventListener("input",leertexto);
email.addEventListener("input",leertexto);
mensaje.addEventListener("input",leertexto);

function leertexto (e) {
	DatosForm[e.target.id]= e.target.value;
    console.log(DatosForm);

}
function validacion () {
	const formulario = document.querySelector(".form_wrap");
	formulario.addEventListener("submit",function (e) {

		// validar formulario
			const {nombre, email, celular, mensaje} = DatosForm;
			if (nombre ==="" || email ==="" || celular ==="" || mensaje ==="" ) {
				e.preventDefault();
				mostrarmensaje ("Falta completar campos",true);
				return;
			} 
		//enviar formulario
		mostrarmensaje ("Enviado con exito");
	});

}

function mostrarmensaje (mensaje,error=null) {
	const formulario = document.querySelector(".form_wrap");
    const alerta = document.createElement("P");
    alerta.textContent= mensaje;
    if (error){
        alerta.classList.add("alerta");
    } else {
        alerta.classList.add("exito");
    }
    formulario.appendChild(alerta);

    setTimeout ( ( ) => {
        alerta.remove();
    }, 3000);
}

