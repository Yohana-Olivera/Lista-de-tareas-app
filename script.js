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

( () => {
const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
	evento.preventDefault();
	const input = document.querySelector('[data-form-input]');
	const value = input.value;
	const list = document.querySelector('[data-list]');
	const task = document.createElement('li');
	task.classList.add('card') 			//agrega al elemento li creado anteriormente la clase card
	input.value = ""; 					//borra lo que se haya escrito en el input
	
	const taskContent = document.createElement('div');

	const titleTask = document.createElement('span');	
	titleTask.classList.add('task');
	titleTask.innerText = value;		
	taskContent.appendChild(checkComplete());
	taskContent.appendChild(titleTask);

	const content = `
            <i class="fas fa-trash-alt trashIcon icon"></i>`;
//  task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);				//esto agrega al nodo padre el elemento li y los sucesivos li que se creen
	
};

btn.addEventListener('click', createTask);

const checkComplete = () => {
	const i = document.createElement('i');
	i.classList.add('far', 'fa-check-square', 'icon');
	i.addEventListener('click', completeTask);
	return i
}

//Inmediately invoked function expressio IIFE
const completeTask = (event) => {
	const element = event.target;
	element.classList.toggle("fas");
	element.classList.toggle("completeIcon");
	element.classList.toggle("far")
};

})();