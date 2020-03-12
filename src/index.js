import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD';
const DELETE_TODO = 'DELETE';

const reducer = (state = [], action) => {
  console.log(action);
  switch(action.type == ADD_TODO) {
    case 'ADD':
      return [];
    case 'DELETE':
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = e =>{
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({type: ADD_TODO, text: toDo})
}

form.addEventListener('submit', onSubmit);