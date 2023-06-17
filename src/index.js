import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {store} from './redux/store/store.js'
import App from './components/App/App.js'

import "./styles.css";



const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
