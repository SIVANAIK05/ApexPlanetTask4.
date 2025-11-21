const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  tasks.push(input.value);
  saveTasks();
  renderTasks();
  input.value = "";
});

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();


  
}


function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show tasks on screen
function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button class="delete-btn" onclick="deleteTask(${index})">X</button>
      </li>
    `;
  });
}
