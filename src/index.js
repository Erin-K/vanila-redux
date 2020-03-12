import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD';
const DELETE_TODO = 'DELETE';

const reducer = (state = [], action) => {
  console.log(state, action)
  switch(action.type) {
    case ADD_TODO:
      const newToDoObj = [{text: action.text, id: Date.now()}, ...state]
      return newToDoObj; // return new state! es6: spread! (original state 변형 불가)
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id); //splice() X -> state mutation 금지!
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()))

const paintToDos = () => {
  const toDos = store.getState();
  console.log(toDos);
  ul.innerHTML='';
  toDos.forEach( toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener('click', dispatchDeleteToDo);
    btn.innerText = 'DEL';
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}
// ********
store.subscribe(paintToDos);
// ********

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO, id
  };
}

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text))
};

const dispatchDeleteToDo = (e) => {
  console.log(e.target.parentNode); //id
  const id = parseInt(e.target.parentNode.id);
  console.log(id);
  store.dispatch(deleteToDo(id));
}

const onSubmit = e =>{
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddToDo(toDo);
}

form.addEventListener('submit', onSubmit);