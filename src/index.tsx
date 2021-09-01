import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from './components/App'
import './styles/style.scss'


const app = document.getElementById('app')

ReactDOM.render(<App title="hola como estas"/>,app)