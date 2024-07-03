function getInput_Data() {
  let input_task_field = document.getElementById("input_task");
  let entered_tasks = document.getElementById("entered_tasks");

  console.log(input_task_field.value);

  if (input_task_field.value.trim() != "") {
    entered_tasks.innerHTML += ` 
    
    <ul>
    <li>
    ${input_task_field.value}
    </li>

    <div class= "task-icons" >
      <span class="material-symbols-outlined" id= "edit" >edit_square</span>
      <span class="material-symbols-outlined"  >delete</span>
    </div>
  </ul>
  `;
  } else {
    Swal.fire({
      icon: "error",
      title: "Task Should not be empty...",
    });
  }
  input_task_field.value = "";

  edit_btn_func();
}

// Function To Edit a task

let edit_btn_func = () => {
  edit.addEventListener("click", () => {
    input_task_field.value = "";
  });
};
