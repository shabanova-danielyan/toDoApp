'use strict';

function readUserInputAndDisplayItNew() {
    const userInput = document.querySelector('.textInput').value;
    const listOfTasks = document.querySelectorAll('.individual-task');
    let nItems = listOfTasks.length; //TODO: make it in a normal way
    let newID =  nItems;
    
    const htmlTableRow = `<tr class=individual-task id=tableRow${newID}>
                <th id=taskName${newID}>${userInput}</th>
                <th><button class='remove-individual-task-btn' id=btnRemoveItem${newID}>Remove task</button></th>
                <th><button class='mark-as-done-btn' id=btnMarkDone${newID}>Mark as done</button></th>
              </tr>`;

    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.insertAdjacentHTML('beforeend', htmlTableRow);
    console.log(htmlTableRow);
    document.querySelector(`#btnRemoveItem${newID}`).addEventListener('click', ()=>removeOneTaskFromPage(newID));
    document.querySelector(`#btnMarkDone${newID}`).addEventListener('click', ()=>markAsDone(newID));
}

function removeOneTaskFromPage (id) {
    document.getElementById(`tableRow${id}`).remove();
    console.log(`Task with id ${id} has been removed.`);
}

//New version when tasks are rows in a table
function removeTasksFromPage() {
   const tableWithTasksList = document.getElementById('tasks-container');
   tableWithTasksList.innerHTML = "";
   console.log("Table is cleared", tableWithTasksList);
}

function markAsDone (id) {
    document.getElementById(`taskName${id}`).style.textDecoration = "line-through";
}

document.querySelector('#submit-btn').addEventListener('click', readUserInputAndDisplayItNew);
document.querySelector('#clear-btn').addEventListener('click', removeTasksFromPage);
//IN PROGRESS document.querySelector(.mark-as-done-btn).addEventListener('click',markAsDone);

