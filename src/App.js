import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Signin from './components/Signin/signin';
import Navigation from './components/Navigation/navigation';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigation />} />
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='signin' element={<Signin />} />
        </Routes>
    </Router>
  );
};

export default App;
