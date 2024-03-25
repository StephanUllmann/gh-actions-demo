import { useState } from 'react';
import ghLogo from './assets/github-mark.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='#' target='_blank'>
          <img src={ghLogo} className='logo' alt='GitHub logo' />
        </a>
      </div>
      <h1>GitHub Actions!</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <p>Yeah, working 🪄</p>
    </>
  );
}

export default App;
