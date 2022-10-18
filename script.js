const tasks = document.querySelector('.tasks')
const deleteList = document.querySelector('.deleted')
const taskList = document.querySelector('.tasks')
let counter = 1;

function submit(taskValue) {
    let row = document.createElement('div')
    row.classList = 'row w-50 mt-2'

    let title = document.createElement('p')
    title.classList = 'col-6'
    let task = document.querySelector('.enterItem')

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Завершить'
    deleteButton.classList = 'btn btn-danger col-4'
    deleteButton.addEventListener("click", deleteTask)

    title.innerHTML = `${counter}. `
    if (task.value != '') { // Написал чтобы можно было добавлять задачи вызовом функции
        title.innerHTML += task.value
    } else {
        title.innerHTML += taskValue
    }

    row.appendChild(title)
    row.appendChild(deleteButton)
    task.value = '' // Очистка input
    counter++;
    tasks.appendChild(row)
}

function deleteTask() {
    if (this.classList.contains('btn-success')) {
        this.classList = 'btn btn-danger col-4'
        this.innerHTML = 'Завершить'
        taskList.appendChild(this.parentNode)
    } else {
        this.classList = 'btn btn-success col-4'
        this.innerHTML = 'Восстановить'
        deleteList.appendChild(this.parentNode)
    }
}


submit('Первая')