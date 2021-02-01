const input = document.querySelector('.input')
const button = document.querySelector('.but')
const ul = document.querySelector('.ul')
const deleteAll = document.querySelector('.deleteAll')

button.addEventListener('click', function() {
    if (input.value === '') {
        input.style.border = "2px solid red"
        alert('Вы введи пустое значение!')
        return
    }

    const newObj = document.createElement('li')
    document.querySelector('ul').appendChild(newObj)
    newObj.classList.add('newObjAll', 'newObj')
    newObj.innerHTML = input.value
    input.value = ''
    input.style.border = 'none'

    newObj.addEventListener('click', function() {
        if (newObj.classList.contains('newObj')) {
            newObj.classList.remove('newObj')
            newObj.classList.toggle('line_through_newObj')
        } else {
            newObj.classList.add('newObj')
            newObj.classList.toggle('line_through_newObj')
        }
    })

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete todo'
    deleteButton.classList.add('deleteButton')
    newObj.appendChild(deleteButton)

    deleteButton.onclick = function() {
        deleteButton.parentElement.remove()
    }
})

deleteAll.onclick = function() {
    const result = confirm('Вы уверены что хотите удалить все элементы?')
    if (result) {
        ul.innerHTML = ''
    }
}

const filterSelectEl = document.querySelector('.filter');
filterSelectEl.addEventListener('change', function() {
    const items = ul.querySelectorAll('.newObjAll');
    for (i = 0; i < items.length; i++) {
        if (items[i].classList.contains(this.value)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
})