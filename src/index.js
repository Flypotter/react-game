import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Example() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>current count:{count}</p>
      <button onClick={() => setCount(count + 1)}>click add</button>
      <button onClick={() => setCount(count - 1)}>click subtract</button>
    </div>
  )
}
  ReactDOM.render(
    <Example />,
    document.getElementById('root')
  );
  
  