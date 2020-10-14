import React from 'react';
import './App.css';
import { observer } from 'mobx-react'
import Market from './components/Market';

const App = observer(() => {

  return (
    <div className="App">
      <Market  />
    </div>
  );
})

export default App;
