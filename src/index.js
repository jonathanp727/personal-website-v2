import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Jonathan Phipps';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
