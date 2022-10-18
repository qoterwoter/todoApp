const tasks = document.querySelector('.tasks')
const deleteList = document.querySelector('.deleted')
const taskList = document.querySelector('.tasks')

function submit(taskValue) {
    let row = document.createElement('div')
    row.classList = 'row w-50 mt-2'

    let title = document.createElement('p')
    title.classList = 'col-6'
    let task = document.querySelector('.enterItem')

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Удалить'
    deleteButton.classList = 'btn btn-danger col-4'
    deleteButton.addEventListener("click", deleteTask)

    if (task.value != '') { // Написал чтобы можно было добавлять задачи вызовом функции
        title.innerHTML = task.value
    } else {
        title.innerHTML = taskValue
    }

    row.appendChild(title)
    row.appendChild(deleteButton)
    task.value = '' // Очистка input

    tasks.appendChild(row)
}

function deleteTask() {
    if (this.classList.contains('btn-success')) {
        this.classList = 'btn btn-danger col-4'
        this.innerHTML = 'Удалить'
        taskList.appendChild(this.parentNode)
    } else {
        this.classList = 'btn btn-success col-4'
        this.innerHTML = 'Восстановить'
        deleteList.appendChild(this.parentNode)
    }
    this.addEventListener("click", restoreTask)
}


submit('Первая')