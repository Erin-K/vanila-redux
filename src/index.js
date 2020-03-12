import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch( action.type ) {
    case ADD:
      return count+1;
    case MINUS :
      return count-1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  console.log("there was a change on the store");
  console.log(countStore.getState());
  number.innerText = countStore.getState();
}

console.log(countStore)
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: ADD}) // type은 바꿀 수 없다. reducer(countModifier) action 값의 필수.
};

const handleMinus = () => {
  countStore.dispatch({type: MINUS})
};

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)
