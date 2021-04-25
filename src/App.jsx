import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modal from './pages/Modal';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
      <Route path='/modal/:id' component={Modal} />
    </BrowserRouter>
  );
}

export default App;
