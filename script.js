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
	const value = input.value;
	const list = document.querySelector('[data-list]');
	const task = document.createElement('li');
	task.classList.add('card')
	input.value = ""; //borra lo que se haya escrito en el input
	const content = `<div> 
              <i class="far fa-check-square icon"></i>
              <span class="task">${value}</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    list.appendChild(task);
	console.log(content);
};

console.log(btn)

btn.addEventListener('click', createTask);