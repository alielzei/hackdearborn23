import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { sendHttpRequest } from './utils';

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
  const [result, setResult] = useState()

  useEffect(() => {
    sendHttpRequest("GET", "/api", true).then(console.log)
  }, [])

  return <div>
    <textarea className='textarea'
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <div>
      <button onClick={() => {
        setResult(text.split(' ').map(firstWay))
      }}>Transform</button>
      <button onClick={() => {
        sendHttpRequest("POST", "/api/summarize", true, {
          text
        }).then((res) => {
          if (res.data?.text) {
            setResult(res.data?.text.trim())
          }
        })
      }}>Summarize</button>
    </div>
    <div>{result}</div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
