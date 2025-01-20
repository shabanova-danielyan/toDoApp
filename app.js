'use strict';

function readUserInputAndDisplayItNew() {
    const userInput = document.querySelector('.textInput').value;
    const listOfTasks = document.querySelectorAll('.individual-task');
    let nItems = listOfTasks.length; 
    let newID =  nItems;
    
    const htmlTableRow = `<tr class=individual-task id=tableRow${newID}>
                <th id=taskName${newID}>${userInput}</th>
                <th><button class='remove-individual-task-btn' id=btnRemoveItem${newID}>Remove task</button></th>
                <th><button class='mark-as-done-btn' id=btnMarkDone${newID}>Mark as done</button></th>
              </tr>`;

    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.insertAdjacentHTML('beforeend', htmlTableRow);
    //console.log(htmlTableRow);
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
    const buttonMarkAsDone = document.getElementById(`btnMarkDone${id}`);
    //console.log(buttonMarkAsDone);
    document.getElementById(`taskName${id}`).style.textDecoration = "line-through";
    buttonMarkAsDone.textContent = "Undo";
    buttonMarkAsDone.id = `btnUndo${id}`;
    //console.log(document.getElementById(`tableRow${id}`));
    document.querySelector(`#btnUndo${id}`).addEventListener('click', ()=>undo(id));
}

function undo(id) {
    console.log(id);
    const undoButton = document.getElementById(`btnUndo${id}`);
    document.getElementById(`taskName${id}`).style.textDecoration = "none";
    undoButton.textContent = "Mark as done";
    undoButton.id = `btnMarkDone${id}`;
    console.log(document.getElementById(`btnMarkDone${id}`));
    document.querySelector(`#btnMarkDone${id}`).addEventListener('click', ()=>markAsDone(id));
}

document.querySelector('#submit-btn').addEventListener('click', readUserInputAndDisplayItNew);
document.querySelector('#clear-btn').addEventListener('click', removeTasksFromPage);
