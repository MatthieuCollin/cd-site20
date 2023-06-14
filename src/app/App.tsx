import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Routes, Route } from 'react-router';
import Homepage from '../components/homepage';
import Collection from '../components/collection';
import Wanted from '../components/wanted';
import About from '../components/about';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/wanted' element={<Wanted />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
