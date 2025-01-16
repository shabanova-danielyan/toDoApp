'use strict';

let toDoTasks = [];

function addTask(newTask) {
    toDoTasks.push(newTask);
}

function readUserInputAndDisplayIt() {
    const userInput = document.querySelector('.textInput').value;
    const html = `<p id=individual-task>${userInput}</p>
                  <button class='remove-individual-task-btn''>Remove task</button>
                  <button class='mark-as-done-btn'>Mark as done</button>`;
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.insertAdjacentHTML('beforeend', html)
    addTask(userInput);
    console.log(toDoTasks);
}

function removeTasksFromPage(array) {
   const divWithTasksList = document.getElementById('tasks-container');
   console.log(divWithTasksList, typeof divWithTasksList);
   const parent = divWithTasksList.parentNode;
   parent.removeChild(divWithTasksList);
}

function clearList(toDoTasks) {
    toDoTasks = [];
    console.log(toDoTasks);
    removeTasksFromPage(toDoTasks);
}

document.querySelector('#submit-btn').addEventListener('click', readUserInputAndDisplayIt);
document.querySelector('#clear-btn').addEventListener('click', clearList);

