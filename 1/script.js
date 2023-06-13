/*
* 1. 입력값 가져오기
* 2. 입력창 비우기
* 3. ToDo 생성
* 4. ToDo 삭제
*/

let toDoList = [];
let lastId = 0;

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
    toDoList = toDoList.filter(item => item.id !== id);
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

function addAction() {
    lastId += 1;
    toDoList.push({ id: lastId, text: getInputText() });
    addToDo(getInputText(), lastId);
    clearInputText();
}

function init() {
  const addButton = document.querySelector('.add_button');
  addButton.addEventListener('click', () => addAction(lastId));
}

init();