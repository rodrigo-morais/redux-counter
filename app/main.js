import { INCREMENT, DECREMENT } from './actions'
import store from './app'

const refresh = () => document.getElementById('counter').innerHTML = store.getState()

const increment = () => store.dispatch({ type: INCREMENT })

const decrement = () => store.dispatch({ type: DECREMENT })


document.getElementById('increment').addEventListener('click', () => {
  increment()
  refresh()
});

document.getElementById('decrement').addEventListener('click', () => {
  decrement()
  refresh()
});

refresh()