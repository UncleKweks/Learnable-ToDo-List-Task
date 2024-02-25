const tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function updateTask(index) {
  const newTask = prompt("Enter the updated task:");
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    displayTasks();
  }
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = " \u00D7";
    deleteBtn.setAttribute("onclick", `deleteTask(${i})`);
    deleteBtn.classList.add("delete-btn");

    const updateBtn = document.createElement("span");
    updateBtn.textContent = " \u270E";
    updateBtn.setAttribute("onclick", `updateTask(${i})`);
    updateBtn.classList.add("update-btn");

    li.appendChild(deleteBtn);
    li.appendChild(updateBtn);
    taskList.appendChild(li);
  }
}

document.getElementById("addBtn").addEventListener("click", addTask);
