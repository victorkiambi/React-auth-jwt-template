import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById("root")
);
