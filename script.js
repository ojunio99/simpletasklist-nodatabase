function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Insert a valid task Please!");
      return;
    }
  
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.innerHTML = taskText + '<span class="delete" onclick="deleteTask(this)"> Remove</span>';
    taskList.appendChild(newTask);
  
    taskInput.value = "";
  }
  
  function deleteTask(task) {
    task.parentNode.remove();
  }
  