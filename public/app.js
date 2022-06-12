var todoList = document.getElementById("todoList"); //ul element
var items = document.getElementById("items");
var count = 0;
items.innerHTML = count;

function addTodo() {
  var input = document.getElementById("input");
  if (input.value.length >= 5 && input.value.length <= 20) {
    var li = document.createElement("li");
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    console.log(li);
    

    var delBtn = document.createElement("button");
    delBtn.innerHTML = "DELETE";
    li.appendChild(delBtn);
    delBtn.setAttribute("onclick", "deleteTodo(this)");


    var editBtn = document.createElement("button");
    editBtn.innerHTML = "EDIT";
    li.appendChild(editBtn);
    editBtn.setAttribute("onclick", "editTodo(this)");
  

    todoList.appendChild(li);
    input.value = "";
    count++;
    items.innerHTML = count;
  } else {
    alert("CORRECT YOUR TODO");
  }
}

function deleteTodo(e) {
  console.log(e.parentNode);
  e.parentNode.remove();
  count--;
  items.innerHTML = count;
}

function editTodo(e) {
  var editValue = prompt("ENTER TODO VALUE", e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = editValue;
}

function delAll() {
  todoList.innerHTML = "";
  count = 0;
  items.innerHTML = count;
}