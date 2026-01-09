const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks from localStorage
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}" onclick="toggleTask(${index})">${task.text}</span>
            <span class="delete-btn" onclick="deleteTask(${index})">X</span>
        `;

        taskList.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task
addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    tasks.push({ text: input.value, completed: false });
    input.value = "";

    renderTasks();
});

// Mark as complete
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial render
renderTasks();
