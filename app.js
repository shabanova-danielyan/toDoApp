'use strict';

let tasksObject = {};

function findLargestIdInList() {
    const listOfTasksIds = Object.keys(tasksObject);
    const numberOfTasksInToDoList = listOfTasksIds.length;
    let largestIdInList = 0;
    for (let i=0; i<numberOfTasksInToDoList+1; i++) {
        if (largestIdInList<listOfTasksIds[i]) {
            largestIdInList = listOfTasksIds[i];
        };
    };
}

function readUserInputAndDisplayItNew() {
    const userInput = document.querySelector('.textInput').value;
    const listOfTasksIds = Object.keys(tasksObject);
    const numberOfTasksInToDoList = listOfTasksIds.length;
    
    let newID;
    if (numberOfTasksInToDoList == 0) {
        newID = 1;
        } else {
        newID = findLargestIdInList() + 1;
        };
    
    const tasksContainer = document.getElementById("tasks-container");

    const htmlTableRow = `<tr class="individual-task" id="tableRow${newID}">
    <th class="rowText" id="taskName${newID}">${userInput}</th>
    <th><button class="button" id="btnRemoveItem${newID}">Remove task</button></th>
    <th><button class="button" id="btnMarkDone${newID}">Mark as done</button></th>
    </tr>`;
    tasksContainer.insertAdjacentHTML('beforeend', htmlTableRow);
    console.log(htmlTableRow);

    tasksObject['id${newID}'] = {
        taskDescription: `${userInput}`,
        status: 'Not done'
    };
    
    document.querySelector(`#btnRemoveItem${newID}`).addEventListener('click', ()=>removeOneTaskFromPage(newID));
    document.querySelector(`#btnMarkDone${newID}`).addEventListener('click', ()=>onClick(newID));
}

function removeOneTaskFromPage (id) {
    document.getElementById(`tableRow${id}`).remove();
    delete tasksObject['id${newID}'];
    console.log(`Task with id ${id} has been removed.`);
}

function onClick (id) {
    const buttonMarkAsDone = document.getElementById(`btnMarkDone${id}`);
    const taskHTML = document.getElementById(`taskName${id}`);

    const singleTask = tasksObject['id${id}'];
    if (singleTask.status == "Not done")
    {
        taskHTML.style.textDecoration = "line-through";
        buttonMarkAsDone.textContent = "Undo";
        singleTask.status = "Done";
    }
    else{
        taskHTML.style.textDecoration = "";
        buttonMarkAsDone.textContent = "Mark as done";
        singleTask.status = "Not done";
    }
}

function removeTasksFromPage() {
    const tableWithTasksList = document.getElementById('tasks-container');
    tableWithTasksList.innerHTML = "";
    tasksObject = {};
    console.log("Table is cleared", tableWithTasksList);
 }

document.querySelector('#submit-btn').addEventListener('click', readUserInputAndDisplayItNew);
document.querySelector('#clear-btn').addEventListener('click', removeTasksFromPage);