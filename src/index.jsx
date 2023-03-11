import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

function firstWay(word, key) {
  const middle = Math.floor(word.length / 2)
  return <React.Fragment key={key}>
    <b>{word.slice(undefined, middle)}</b>

    {word.slice(middle, undefined)}

    {" "}
  </React.Fragment>
}

function App() {
  const [text, setText] = useState("hello this is the text that i want to input into my app")

  return <div>
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <div>
      <button>Transform</button>
    </div>
    <div>{
      text.split(' ').map(firstWay)
    }</div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
