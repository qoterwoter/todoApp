function submit(taskValue) {
    let tasks = document.querySelector('.tasks')
    let tr = document.createElement('tr')
    let tdTitle= document.createElement('td')
    tr.appendChild(tdTitle)
    let task = document.querySelector('.enterItem')

    let tdDelete = document.createElement('td')
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Удалить'
    deleteButton.type='submit'
    deleteButton.classList = 'btn btn-danger'
    deleteButton.addEventListener("click", deleteTask)
    tdDelete.appendChild(deleteButton)

    if (task.value!='') {                                   // Написал чтобы можно было добавлять задачи в js коде
        tdTitle.innerHTML = task.value
    } else {
        tdTitle.innerHTML = taskValue
    }
    tr.appendChild(tdTitle) 
    tr.appendChild(tdDelete)
    task.value = ''                                         // Очистка input

    tasks.appendChild(tr)
}

function deleteTask() {
    let deleteList = document.querySelector('.deleted')
    let taskList = document.querySelector('.tasks')
    if(this.classList.contains('btn-success')) {
        this.classList = 'btn btn-danger'
        this.innerHTML = 'Удалить'
        taskList.appendChild(this.parentNode.parentNode)
    } else {    
        this.classList = 'btn btn-success'
        this.innerHTML = 'Восстановить'
        deleteList.appendChild(this.parentNode.parentNode)
    }
    this.addEventListener("click", restoreTask)
}

submit('Первая')