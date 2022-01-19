import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;

}
`


ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
);
