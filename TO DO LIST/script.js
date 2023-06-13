function getList() {
    return JSON.parse(localStorage.getItem('list')) || [];
}

function getInputText() {
    const inputText = document.querySelector('.text_input');
    return inputText.value;
}

function clearInputText() {
    const inputText = document.querySelector('.text_input');
    inputText.value = '';
}

function removeToDo(id) {
    const toDo = document.querySelector(`#o${id}`);
    toDo.remove();
    const list = getList().filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(list));
}

function addToDo(text, id) {
    const list = document.querySelector('.list');

    const item = document.createElement('li');
    item.className = 'item';
    item.id = `o${id}`;

    const checkCircle = document.createElement('button');
    checkCircle.className = 'check-circle';

    const innerText = document.createElement('p');
    innerText.className = 'text';
    innerText.innerHTML = `${text}`;

    item.appendChild(checkCircle);
    item.appendChild(innerText);
  
    list.appendChild(item);

    checkCircle.addEventListener('click', () => removeToDo(id))
}

function addAction(lastId) {
    let toDoList = getList();
    toDoList.push({ id: lastId, text: getInputText() });
    addToDo(getInputText(), lastId);
    clearInputText();
    localStorage.setItem('list', JSON.stringify(toDoList));
}

function init() {
  let lastId = Number(localStorage.getItem('lastId'));
  if(!lastId) {
    localStorage.setItem('lastId', 0);
    lastId = 0;
  }
  
  getList().forEach(elem => addToDo(elem.text, elem.id));
  
  const addButton = document.querySelector('.add_button');
  addButton.addEventListener('click', () => {
    lastId += 1;
    addAction(lastId);
    localStorage.setItem('lastId', lastId);
  });
}

init();
