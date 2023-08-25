const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="task">${inputBox.value}
                <select class="priority-dropdown">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <span class="delete-task">&#x2716;</span>
        `;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

function clearAllTasks() {
    listContainer.innerHTML = "";
    saveData();
}

function deleteAllTasks() {
    listContainer.innerHTML = "";
    saveData();
}

inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
    if (e.key === "Escape") {
        inputBox.value = ""; 
        inputBox.blur(); 
    }
});


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
