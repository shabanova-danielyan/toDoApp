'use strict';

//let toDoTasks = [];

//function addTask(newTask) {
//    toDoTasks.push(newTask);
//}

//Old Adds a new task as a paragraph. Old code is commented on HTML page.
//function readUserInputAndDisplayIt() {
//    const userInput = document.querySelector('.textInput').value;
//    const html = `<p id=individual-task>${userInput}</p>
//                  <button class='remove-individual-task-btn''>Remove task</button>
//                  <button class='mark-as-done-btn'>Mark as done</button>`;
//    const tasksContainer = document.getElementById("tasks-container");
//    tasksContainer.insertAdjacentHTML('beforeend', html)
//    addTask(userInput);
//    console.log(toDoTasks);
//}

//New Adds a new task + buttons ('Clear list', 'Mark as done') as lines in a table. HTML page in adjusted

function readUserInputAndDisplayItNew() {
    const userInput = document.querySelector('.textInput').value;
    const listOfTasks = document.querySelectorAll('.individual-task');

    if (listOfTasks) {
        const htmlTableRow = `<tr class=individual-task id=${listOfTasks.length}>
                    <th>${userInput}</th>
                    <th><button class='remove-individual-task-btn''>Remove task</button></th>
                    <th><button class='mark-as-done-btn'>Mark as done</button></th>
                  </tr>`;
        const tasksContainer = document.getElementById("tasks-container");
        tasksContainer.insertAdjacentHTML('beforeend', htmlTableRow);
    } else { 
        const htmlTableRow = `<tr class=individual-task id=${document.querySelectorAll('.individual-task').length}>
                    <th>${userInput}</th>
                    <th><button class='remove-individual-task-btn''>Remove task</button></th>
                    <th><button class='mark-as-done-btn'>Mark as done</button></th>
                  </tr>`;
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.insertAdjacentHTML('beforeend', htmlTableRow);
    }

    
}

//function readUserInputAndDisplayItOld() {
//    const userInput = document.querySelector('.textInput').value;
//    const htmlTableRow = `<tr id=individual-task>
//                    <th>${userInput}</th>
//                    <th><button class='remove-individual-task-btn''>Remove task</button></th>
//                    <th><button class='mark-as-done-btn'>Mark as done</button></th>
//                  </tr>`;
//    const tasksContainer = document.getElementById("tasks-container");
//    tasksContainer.insertAdjacentHTML('beforeend', htmlTableRow);
//    addTask(userInput);
//    console.log(toDoTasks);
//}

//Relevant for the case when tasks are paragraphs inside a <div>
//function removeTasksFromPage() {
//   const divWithTasksList = document.getElementById('tasks-container');
//   console.log(divWithTasksList, typeof divWithTasksList);
//   const parent = divWithTasksList.parentNode;
//   parent.removeChild(divWithTasksList);
//}

//New version when tasks are rows in a table
function removeTasksFromPage() {
   const tableWithTasksList = document.getElementById('tasks-container');
   tableWithTasksList.innerHTML = "";
   console.log("Table is cleared", tableWithTasksList);
}

//function clearList() {
//    toDoTasks = [];
//    console.log(toDoTasks);
//    removeTasksFromPage();
//}

function removeOneTaskFromPage () {

}

function removeOneTask () {

}

//IN PROGRESS function markAsDone () {}

document.querySelector('#submit-btn').addEventListener('click', readUserInputAndDisplayItNew);
document.querySelector('#clear-btn').addEventListener('click', removeTasksFromPage);
//IN PROGRESS document.querySelector('#').addEventListener('', removeOneTask);
//IN PROGRESS document.querySelector().addEventListener('',markAsDone);

