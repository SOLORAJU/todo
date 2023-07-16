// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add" button
addButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create new list item
    const listItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    // Create "Complete" button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', completeTask);

    // Append task text and complete button to list item
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(completeButton);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Function to complete a task
function completeTask(event) {
  const listItem = event.target.parentNode;
  listItem.classList.add('completed');
}
