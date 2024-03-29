import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Create from './Component/Create';
import Edit from './Component/Edit';

function App() {
  return (
    <div className="App">
      <h1>Table</h1>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Edit/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
