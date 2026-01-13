// Elements variables
let nameInputEl = document.getElementById('name-input');
let jobInputEl = document.getElementById('job-input');

let submitbtnEl = document.querySelector(".submitbtn");
let todoListEl = document.querySelector("#todo-list");

let errorNameEl = document.querySelector(".error_name");
let errorJobEl = document.querySelector(".error_job");

// Adding click event to the button element,
submitbtnEl.addEventListener('click', (e) => {
  e.preventDefault();

  // input values we can get,
  let jobValue = jobInputEl.value;
  let nameValue = nameInputEl.value;

  let regEx = /^[a-zA-Z]+$/;

  // Testing the valid inputs by regex,
  if (regEx.test(nameValue) === false) {
    errorNameEl.style.display = 'block';
    return;
  } else {
    errorNameEl.style.display = 'none';
  }

  if (regEx.test(jobValue) === false) {
    errorJobEl.style.display = 'block';
    return;
  } else {
    errorJobEl.style.display = 'none';
  }

  // creating todo element,
  let todo = document.createElement('li');

  // creating remove button,
  let removeEl = document.createElement('div');
  removeEl.textContent = 'X';
  removeEl.classList.add('remove-btn');
  removeEl.addEventListener('click', () => {
    let parentEl = removeEl.parentElement;
    parentEl.remove();
  });

  // creating job element and if 'developer' role added means need to create new style,
  let jobTodo = document.createElement('span');
  jobTodo.innerHTML = jobValue;
  if (jobValue.toLocaleLowerCase() === 'developer') {
    jobTodo.classList.add('developer-style');
  } else {
    jobTodo.classList.add('job-style');
  }

  // appending all created elements in todo element,
  todo.innerHTML = `<span>${nameValue}</span>`;
  todo.classList.add('todo-style');
  todo.append(jobTodo);
  todo.append(removeEl);

  todoListEl.append(todo);
});
