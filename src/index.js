import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return count+1;
  } else if (action.type === 'MINUS') {
    return count-1;
  }
  return count;
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
  countStore.dispatch({type:'ADD'})
};

const handleMinus = () => {
  countStore.dispatch({type: 'MINUS'})
};

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)
