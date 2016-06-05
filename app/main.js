import store from './app'

document.getElementById('counter').innerHTML = store.getState()