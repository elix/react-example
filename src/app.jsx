import React from 'react';
import ReactDOM from 'react-dom';
import ListBox from 'elix/elements/demos/src/ListBox';

ReactDOM.render(
  <div>
    <h1>React app with an Elix list box</h1>
    <sample-list-box>
      <div>Acai</div>
      <div>Acerola</div>
      <div>Apple</div>
      <div>Apricot</div>
      <div>Banana</div>
      <div>Blackberry</div>
      <div>Blueberry</div>
      <div>Cantaloupe</div>
      <div>Cherry</div>
    </sample-list-box>
  </div>,
  document.querySelector('#root')
);
