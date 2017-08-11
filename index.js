import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App';
import FromJS from './components/FromJS';

render(
    <FromJS />,
    document.getElementById("index")
);