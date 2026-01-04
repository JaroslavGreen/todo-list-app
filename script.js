const todoInput = document.querySelector('.to-do-input');
const todoBtn = document.querySelector('.to-do-btn');
const todoList = document.querySelector('.to-do-list');


todoBtn.addEventListener('click', function () {
    addTask()
});

function addTask() {
    if (todoInput.value === "") {
        alert("You need to enter text");
    }

    else {
        let li = document.createElement('li');
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    todoInput.value = '';
    saveData();
}

todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }

    else if (e.target.tagName === 'SPAN') {
        const li = e.target.parentElement;

        li.classList.add('removing');

        li.addEventListener('transitionend', () => {
            li.remove();
            saveData();
        }, { once: true });
    }


});

//Local storage

function saveData() {
    localStorage.setItem('data', todoList.innerHTML);
}

function showData() {
    todoList.innerHTML = localStorage.getItem('data');
}

showData();

