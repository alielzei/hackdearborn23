import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

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
    <div>{(() => {
      console.log(text.split(' '))
      return text
    })()}</div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
