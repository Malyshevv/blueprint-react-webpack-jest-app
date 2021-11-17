import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from "../App";

window.addEventListener('load', () => {
    console.log('load canceled !')
    ReactDOM.hydrate(<App />, document.getElementById('App'))
});