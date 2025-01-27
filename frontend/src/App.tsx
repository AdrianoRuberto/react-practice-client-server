import {  useState } from 'react';
import unicorn from './assets/unicorn.webp';
import './App.css';
import { formatDate } from './utils/date';


function App() {
  const [tmp, setTmp] = useState(0);


  return (
    <>
      <div>
      <div>
        <div> 


          <img src={unicorn}    className="logo"       />
        </div> 
      </div>
      <h1>React Practice!</h1>
      <p>today date: {formatDate(new Date())}</p>
      <div className="card">       <button onClick={() => setTmp((count) => count + 1)}>          count is {tmp}        </button>
      </div>
      </div>
    </>
  );
}

export default App;
