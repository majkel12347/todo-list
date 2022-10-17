const todoInput = document.getElementById("input-task");
const todoBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

//create listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);

// Create Li

function addTodo(e) {
  e.preventDefault();
  // div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // create completed button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML += `<i class="fa fa-check"></i>`;
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);

  // create delete button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = `<i class= "fa fa-trash"></i>`;
  trashBtn.classList.add("trash-btn");
  trashBtn.style.pointerEvents = "none";
  trashBtn.style.opacity = ".5";

  if (todoInput.value === "") {
    return;
  } else {
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
}

function deleteItem(e) {
  const item = e.target;
  const todo = item.parentElement;

  if (item.classList[0] === "trash-btn") {
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const done = todo.classList.toggle("completed");
    todo.childNodes[2].style.pointerEvents = "auto";
    todo.childNodes[2].style.opacity = "1";
    return done;
  }
}
