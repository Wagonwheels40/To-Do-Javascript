const addButton = document.querySelector('button');
const removeButton = document.getElementById('removeButton');
const listGroup = document.querySelector('.list-group');
const addMoreButton = document.getElementById('addMoreButton');
let counter = 4;

const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    listGroup.innerHTML = savedTasks;
    counter = listGroup.children.length + 1;
}

addButton.addEventListener('click', function() {
    const addMoreButton = document.getElementById('addButton');
    addMoreButton.textContent = 'Add Task';

    const newTaskInput = document.getElementById('newTaskInput');
    const taskDescription = newTaskInput.value.trim();
    if (taskDescription === '') {
        return;
    }

    const newItem = document.createElement('li');
    newItem.classList.add('list-group-item');

    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.classList.add('form-check-input', 'me-1');
    newCheckbox.setAttribute('id', `checkbox-${counter}`)

    const newLabel = document.createElement('label');
    newLabel.classList.add('form-check-label');
    newLabel.setAttribute('for', `checkbox-${counter}`);
    newLabel.textContent = taskDescription;

    newItem.appendChild(newCheckbox);
    newItem.appendChild(newLabel);

    listGroup.appendChild(newItem);

    localStorage.setItem('tasks', listGroup.innerHTML);

    newTaskInput.value = '';
    counter++;
});

removeButton.addEventListener('click', function() {
    localStorage.removeItem('tasks');
    listGroup.innerHTML = '<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"><label class="form-check-label" for="Checkbox">Create note</label></li>';
    counter = 2;
});
