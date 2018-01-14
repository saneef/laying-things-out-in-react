import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif"
};

const App = () => (
  <div style={styles}>
    <h1>Laying things out in React</h1>    
  </div>
);

render(<App />, document.getElementById('root'));
