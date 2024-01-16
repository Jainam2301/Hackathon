/**
 * To-Do List App Lab Instructions
 * --------------------------------
 *
 * Goal: Your task is to replicate the functionality of the provided example.
 * Example Link: https://65a047f8c51a3b297fcdba3f--cerulean-mousse-4a9723.netlify.app/
 *
 * Key Functions to Implement:
 * 1. Add a task to the list.
 * 2. Increment the task counter upon adding a task.
 * 3. Reset the list of tasks.
 * 4. Reset the task counter.
 *
 * Note: You will need to understand and use 'parseInt' to complete this lab.
 *       You can search online to learn how it works.
 *
 * Lab Bonus:
 * - Add validation to prevent adding an empty task.
 * - Allow adding a task by pressing the 'Enter' key.
 *
 * Good luck!
 */
var newTask = document.getElementById("new-task");
var counter = document.getElementById("task-counter");
var list = document.getElementById("task-list");
var task = 0;
newTask.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("butt").click();
    }
})
function addTask(){
    if(newTask.value == ""){
        alert("Your input is empty !");
    }
    else{
        task += 1;
        list.innerHTML = list.innerHTML + `<li>${newTask.value}</li>`
        counter.innerHTML = task;
        newTask.value = null;
    }
}
function clearTask(){
    task = 0;
    counter.innerHTML = task;
    list.innerHTML = " "
}