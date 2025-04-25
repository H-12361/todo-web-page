const inputbtn = document.getElementById("inputbtn");
const todolist = document.getElementById("todolist");
function addtask(){
    if(inputbtn.value == "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbtn.value; //use for adding the input value to the list
        todolist.appendChild(li);
        let span = document.createElement("span"); //use for creating a span element
        span.innerHTML = "\u00D7"; //use for creating a cross button
        li.appendChild(span); //use for appending the span element to the list item
    }
    inputbtn.value = ""; //use for clearing the input field
    save();

};
todolist.addEventListener("click", function(e) { //use for deleting the task when clicked on the cross button
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); //use for toggling the class of the list item
        save();


    } else if(e.target.tagName === "SPAN") {        
        e.target.parentElement.remove(); //use for removing the list item when clicked on the cross button
        save();
    } 
},false) ; 


function save() {
    localStorage.setItem("data", todolist.innerHTML); //use for saving the list to local storage
}
function show() {
    todolist.innerHTML = localStorage.getItem("data"); //use for showing the list from local storage
}
show(); //use for calling the show function to display the list when the page loads 