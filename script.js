function submit(taskValue) {
    let all = document.querySelector('.all')
    let li = document.createElement('li')
    li.classList = ''
    let task = document.querySelector('.enterItem')


    let deleteButton = document.createElement('a')
    deleteButton.innerHTML = 'Delete'
    deleteButton.classList = 'btn btn-danger'
    deleteButton.addEventListener("click", deleteTask)

    let taskDescription = document.createElement('p')
    if (task.value!='') {                                   // Написал чтобы можно было добавлять задачи в js коде
        taskDescription.innerHTML = task.value
    } else {
        taskDescription.innerHTML = taskValue
    }
    li.appendChild(taskDescription) 
    li.appendChild(deleteButton)
    task.value = ''                                         // Очистка input

    all.appendChild(li)
}

function deleteTask() {
    let deletedList = document.querySelector('.deleted')
    deletedList.appendChild(this.parentNode)
    console.log(deletedList)
}

submit('First')