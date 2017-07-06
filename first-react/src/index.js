import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

// 引入HelloReact组件
// import HelloReact from './helloReact';

const root = document.querySelector('#root');

// render(<div>Hello Reach!</div>, root);
// render(<HelloReact name1="Jason" name2="Tavia" />, root);
render(<App />, root);
