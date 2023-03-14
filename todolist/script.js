function ToDoList() {
	let ultodo, input, btnAll, btnTodo, btnCompleted;
	console.log("YOU ARE IN TODOLIST JS")

	const todos = [
		{
			id: 0,
			text: 'Go shopping',
			completed: false
		},
		{
			id: 1,
			text: 'Go to work',
			completed: false
		},
		{
			id: 2,
			text: 'Do english homework',
			completed: true
		},
	];

	const removeTodo = id => {
		console.log("removeTodo item id", id);
		// filter return new array
		let newTodoList = todos.filter(todo => todo.id !== id);
		console.log("newTodoList", newTodoList);
		ultodo.removeChild(ultodo.querySelector('#todo-' + id))
 	};

	const toggleTodo = (id, ele) => {
		console.log("toggleTodo item id", id);

		let newTodoList = todos.map(ele => {
			if(ele.id === id) {
				ele.completed = !ele.completed;
			}
			return ele;
		});
		
		const oldClass = ele.classList.contains('completed') ? 'completed' : 'uncomplete';
        const newClass = oldClass === 'completed' ? 'uncomplete' : 'completed';
		console.log("oldClass", oldClass, "newClass", newClass)
		
        ele.classList.replace(oldClass, newClass);
		console.log("ele.classList", ele.classList)

        ele.parentNode.classList.toggle('completed');
 	};

	const createLi = ({ text, completed, id }) => {
        const li = document.createElement('li');
        li.id = 'todo-' + id;

		if(completed) {
			li.classList.add('completed')
		}

        const spancheck = document.createElement('span');
        spancheck.classList.add(completed ? 'completed' : 'uncomplete');
        const spancross = document.createElement('span');

		spancheck.addEventListener('click', (e) => {
			toggleTodo(id, e.target)
		})

        spancross.classList.add('cross');
		spancross.addEventListener('click', (e) => {
			removeTodo(id);
		})

        const textNode = document.createTextNode(text);

        li.appendChild(spancheck);
        li.appendChild(textNode);
        li.appendChild(spancross);
        return li;
    };

	// destrutturing obj
	const addNewTodo = (todo) => {
		// console.log("YOU ARE IN addNewTodo")
		todos.push(todo)
		const li = createLi(todo);

		const firstLi = ultodo.firstChild;
		if(!firstLi) {
			ultodo.appendChild(li);
		} else {
			ultodo.insertBefore(li, firstLi)
		}
	}

	const addToDo = (e) => {
		console.log("addToDo e.target.value", e.target.value)
		const key = e.keyCode, ele = e.target;

		if(key === 13 && ele.value.trim().length > 2) {
			const todo = {
				text: ele.value.trim(),
				id: todos.length,
				completed: false
			}

			addNewTodo(todo);
			ele.value = ''
		}
	}

	const renderTodos = (todoType) => {
		const lis = ultodo.querySelectorAll('li');

		if (lis) {
			lis.forEach(li => ultodo.removeChild(li))
		}

		const currentTodos = todos.filter(todo => {
			if(todoType === 'all') {
				return todo;
			}
			return (todoType === 'completed') ? todo.completed : !todo.completed;
		})

		// const lis = todos.map(todo => createLi(todo));
		currentTodos.map(todo => createLi(todo))
		.forEach(li => ultodo.appendChild(li))
	}

	const toggleBtnClasses = (target, btn = []) => {
		target.classList.toggle('active');
		target.setAttribute('disabled', true);

		btns.forEach(btn => {
			btn.removeAttribute('disable', true)
			btn.classList.remove('active')
		})
	}

	const addListeners = () => {
		btnAll = document.querySelector('#btnAll');
		btnCompleted = document.querySelector('#btnCompleted');
		btnTodo = document.querySelector('#btnTodo');

		btnAll.addEventListener('click', e => {
			toggleBtnClasses(e.target, [btnTodo, btnCompleted])
			renderTodos('all');
		})
		btnCompleted.addEventListener('click', e => {
			toggleBtnClasses(e.target, [btnAll, btnTodo])
			renderTodos('completed');
		})
		btnTodo.addEventListener('click', e => {
			toggleBtnClasses(e.target, [btnAll, btnCompleted])
			renderTodos('uncompleted');
		})
	}

	const renderTodosList = () => {
		// console.log("YOU ARE IN RENDERTODOS METHOD")

		ultodo = document.querySelector('ul#todolist');

		if(!ultodo) {
			ultodo = document.createElement('ul');
			ultodo.id = 'todolist';
			document.body.appendChild(ultodo);
		}

		renderTodos('all');

		input = document.querySelector('#todo')

		if(!input) {
			input = document.createElement('input');
			input.id = 'todo';
			input.name = 'todo';
			input.placeholder = 'Add new todo'
			ultodo.parentNode.insertBefore(input, ultodo);
		}

		// Si passa un riferimento alla funzione senza parentesi
		// Con le parentesi si esegue la funzione
		input.addEventListener('keyup', addToDo)	

		addListeners()
	}

	return {
		getToDos: function() {
			return todos;
		},
		init: function() {
			renderTodosList();
		}
	}
}

const myTodo = ToDoList();

// To invoke function inside getToDos
myTodo.getToDos();
myTodo.init();
// console.log("myTodo.getToDos()", myTodo.getToDos())
// console.log("myTodo.init()", myTodo.init())