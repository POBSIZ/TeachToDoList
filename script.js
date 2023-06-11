function getList() {
    const listString = window.localStorage.getItem('list');
    const toDoListArr = JSON.parse(listString);
    const toDoList = toDoListArr || [];
    return toDoList
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
    
    let toDoList = getList();
    const list = toDoList.filter(item => item.id !== id);

    const toDoListString = JSON.stringify(list);
    window.localStorage.setItem('list', toDoListString);
}

function addToDo(text, id) {
    const list = document.querySelector('.list');

    const item = document.createElement('li');
    item.className = 'item';
    item.id = `o${id}`;

    const checkCircle = document.createElement('div');
    checkCircle.className = 'check-circle';
    checkCircle.id = `i${id}`;

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

    toDoList.push({
      id: lastId + 1,
      text: getInputText()
    });

    addToDo(getInputText(), lastId + 1);
    clearInputText();
  
    const toDoListString = JSON.stringify(toDoList);
    window.localStorage.setItem('list', toDoListString);
}

function init() {
  let lastId = Number(window.localStorage.getItem('lastId'));
  if(!lastId) {
    window.localStorage.setItem('lastId', 0);
    lastId = 0;
  }
  
  const toDoList = getList();
  toDoList.forEach(elem => addToDo(elem.text, elem.id));
  
  const addButton = document.querySelector('.add_button');
  addButton.addEventListener('click', () => {
    addAction(lastId);
    lastId += 1;
    window.localStorage.setItem('lastId', lastId + 1);
  });
}

init();