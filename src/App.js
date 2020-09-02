import React from 'react';
import './components/reset.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
