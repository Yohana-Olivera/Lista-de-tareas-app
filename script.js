/*const btn = document.querySelector('[data-form-btn]');


console.log(btn);

//opcion 1 usando funciones comunes

/* btn.addEventListener('click', function (evento){
	evento.preventDefault();
	const input = document.querySelector('[data-form-input]');
	console.log(input.value);
});
*/


//Funciones flechas o Arrow functions o Funciones anónimas

//el codigo de la opcion 1 usando funciones flecha

/*btn.addEventListener('click',(evento) =>{
	evento.preventDefault();
	const input = document.querySelector('[data-form-input]');
	console.log(input.value);
});*/

//dejando el codigo mas limpio

const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
	evento.preventDefault();
	const input = document.querySelector('[data-form-input]');
	console.log(input.value);
};

btn.addEventListener('click', createTask);