'use strict';

const tasks = {};

//function findLargestIdInList() {
//    const listOfTasksIds = tasks.key;
//    const largestIdInList = () => 
//}

function readUserInputAndDisplayItNew() {
    const userInput = document.querySelector('.textInput').value;
    const numberOfTasksInToDoList = tasks.key.length;

    if (numberOfTasksInToDoList == 0) {
        const htmlTableRow = `<tr class="individual-task" id="tableRow1">
        <th class="rowText" id="taskName1">${userInput}</th>
        <th><button class="button" id="btnRemoveItem1">Remove task</button></th>
        <th><button class="button" id="btnMarkDone1">Mark as done</button></th>
        </tr>`;
        const tasksContainer = document.getElementById("tasks-container");
        tasksContainer.insertAdjacentHTML('beforeend', htmlTableRow);
        console.log(htmlTableRow);
        const tasks = {
            1: {
                taskDescription: `${userInput}`,
                status: 'Not done'
                }
            };
    } else {
        const newID = findLargestIdInList() ++;
        const htmlTableRow = `<tr class=individual-task id=tableRow${newID}>
        <th class="rowText" id=taskName${newID}>${userInput}</th>
        <th><button class="button" id=btnRemoveItem${newID}>Remove task</button></th>
        <th><button class="button" id=btnMarkDone${newID}>Mark as done</button></th>
        </tr>`;
        const tasksContainer = document.getElementById("tasks-container");
        tasksContainer.insertAdjacentHTML('beforeend', htmlTableRow);
        console.log(htmlTableRow);
        tasks.newID = {
            taskDescription: `${userInput}`,
            status: 'Not done'
        };
    }

    document.querySelector(`#btnRemoveItem${newID}`).addEventListener('click', ()=>removeOneTaskFromPage(newID));
    document.querySelector(`#btnMarkDone${newID}`).addEventListener('click', ()=>onClick(newID));
}

function removeOneTaskFromPage (id) {
    document.getElementById(`tableRow${id}`).remove();
    delete tasks.id;
    console.log(`Task with id ${id} has been removed.`);
}

function onClick (id) {
    const buttonMarkAsDone = document.getElementById(`btnMarkDone${id}`);
    const taskHTML = document.getElementById(`taskName${id}`);

    const task = tasks.id;
    if (task.status == "Not done")
    {
        taskHTML.style.textDecoration = "line-through";
        buttonMarkAsDone.textContent = "Undo";
        task.status = "Done";
    }
    else{
        taskHTML.style.textDecoration = "";
        buttonMarkAsDone.textContent = "Mark as done";
        task.status = "Not done";
    }
}

function removeTasksFromPage() {
    const tableWithTasksList = document.getElementById('tasks-container');
    tableWithTasksList.innerHTML = "";
    tasks = {};
    console.log("Table is cleared", tableWithTasksList);
 }

document.querySelector('#submit-btn').addEventListener('click', readUserInputAndDisplayItNew);
document.querySelector('#clear-btn').addEventListener('click', removeTasksFromPage);
