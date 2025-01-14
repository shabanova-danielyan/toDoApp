'use strict';

let items = [];

function addItem(newItem) {
    items.push(newItem);
}

function displayTasksList(items) {
    items.forEach(function(task, index) {
        const html = `<p id=task${index+1}>${task}</p>`;
        const tasksContainer = document.getElementById("tasks-container");
        tasksContainer.insertAdjacentHTML('beforeend', html)
    });
};

function read_content_of_text_box_and_add_it_to_list() {
    addItem(document.querySelector('.textInput').value);
    console.log(items);
    displayTasksList(items);
};

document.querySelector('#submit-btn').addEventListener('click', read_content_of_text_box_and_add_it_to_list);




//addItem("to clean the house");
//console.log(items);

//function clearList() {
// in progress    
//}


//function deleteItem()
//function markAsDone
// function logg(a){
//     console.log(a);
// }    
    // items.forEach((a,ii) => {
    //     console.log(ii+"  "+a);
    // });
    //items.forEach(logg);
    //console.log(items);

//    let strrr = ""
//    for (let index = 0; index < items.length; index++) {
//        const element = items[index];
//        strrr = strrr + element + "\n";  
//    }
//    document.getElementById("demo").innerHTML = strrr
//};
