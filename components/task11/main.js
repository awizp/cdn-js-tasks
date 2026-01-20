// todo array,
let todoArr = [
    {
        id: crypto.randomUUID(),
        todoTitle: "Click add button or enter key to add todo",
        todoComplete: false,
    },
    {
        id: crypto.randomUUID(),
        todoTitle: "Click on todo item to mark as complete",
        todoComplete: false,
    },
    {
        id: crypto.randomUUID(),
        todoTitle: "Click delete button to remove todo",
        todoComplete: false,
    },
];

// empty array for local storage,
let todoSaved = [];

// varibles
const inputEl = document.getElementById('todo-input');
const addBtn = document.getElementById('add-icon');
const deleteBtn = document.getElementById('delete-icon');
const todoContainer = document.getElementById('todo-container');
const todoFieldEl = document.getElementById('todo-field');
const todoItems = document.querySelectorAll(".todo-item");
const errorEl = document.getElementById('error-span');

let fragmentEl = document.createDocumentFragment();

// random id generator,
let uuid = crypto.randomUUID();

const storageHandle = (array) => {
    todoSaved = JSON.parse(localStorage.getItem('todos'));

    if (!todoSaved) {
        return array;
    }

    return todoSaved;
};

// handling todo complete,
const todoCompletedHandle = (e) => {
    let storedTodo = storageHandle(todoArr);

    let newTodoList = storedTodo.map((todo) => (
        todo.id === e.target.id ? { ...todo, todoComplete: !todo.todoComplete } : todo
    ));

    todoArr = newTodoList;

    todoContainer.innerHTML = '';

    appendElsFunc(todoArr);
};

//handlig todo delete,
const todoDeleteHandle = (e) => {

    let deleteElId = e.target.dataset.todoId;

    // filter out the articular id,
    let storedTodo = storageHandle(todoArr);

    let newTodoList = storedTodo.filter((todo) => (
        todo.id !== deleteElId
    ));

    todoArr = newTodoList;

    todoContainer.innerHTML = '';

    appendElsFunc(todoArr);
};

// appending the elements in todo container,
const appendElsFunc = (array) => {
    array.forEach((todo) => {
        todoFieldEl.style.display = 'flex';

        // todo element,
        let todoEl = document.createElement('li');
        todoEl.innerHTML = todo.todoTitle;
        todoEl.classList.add("todo-item");
        todoEl.setAttribute('id', todo.id);
        todoEl.addEventListener('click', (e) => todoCompletedHandle(e));

        // making toggle completed,
        if (todo.todoComplete) {
            todoEl.classList.add('todo-completed');
        } else {
            todoEl.classList.remove('todo-completed');
        }

        // delete button added,
        let deleteEl = document.createElement('div');
        deleteEl.innerHTML = `<ion-icon name="close-outline" data-todo-id="${todo.id}"></ion-icon>`;
        deleteEl.classList.add('todo-delete');
        deleteEl.addEventListener('click', (e) => todoDeleteHandle(e));

        todoEl.append(deleteEl);
        fragmentEl.append(todoEl);
    });

    todoContainer.append(fragmentEl);

    // store the array in local storage,
    localStorage.setItem('todos', JSON.stringify(array));

    // reset the input value
    inputEl.value = "";

    // hide the todo container when array length is 0,
    if (array.length === 0) {
        todoFieldEl.style.display = 'none';
        return;
    }
};

// loading todo list after document load,
window.addEventListener('load', () => {
    todoContainer.style.display = 'flex';

    let storedTodo = storageHandle(todoArr);

    appendElsFunc(storedTodo);
});

// taking input field to todoArr,

const addTodoFunc = () => {
    errorEl.style.display = 'none';

    let inputValue = inputEl.value;

    if (inputValue === '') {
        errorEl.style.display = 'block';
        return;
    }

    // creating new todo,
    let newTodo = {
        id: crypto.randomUUID(),
        todoTitle: inputValue.trim().replace(/\s+/g, ' '),
        todoComplete: false,
    };

    // set the new todo list and push the newTodo into array,
    let storedTodo = storageHandle(todoArr);

    let newTodoList = storedTodo;

    newTodoList.push(newTodo);

    todoArr = newTodoList;

    todoContainer.innerHTML = '';

    appendElsFunc(todoArr);
};

addBtn.addEventListener('click', addTodoFunc);

inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTodoFunc();
    }
});