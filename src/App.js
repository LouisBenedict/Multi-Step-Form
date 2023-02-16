import './Styles/App.css';
import React, {useState} from 'react';
import Conditional from './Components/Conditional';

function App({page, setPage}) {

  return (
    <div className="App">
      <Conditional page={page} />
    </div>
  );
}

export default App;
