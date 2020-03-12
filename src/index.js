import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD';
const DELETE_TODO = 'DELETE';

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()}]; // return new state! es6: spread! (original state 변형 불가)
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()))

const onSubmit = e =>{
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({type: ADD_TODO, text: toDo})
}

form.addEventListener('submit', onSubmit);