// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import React from "react";
// import { render } from "react-dom";


function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Nav />
       <Routes>
        <Route path="/" exact element = {<Home />}/>
        <Route path="/home" exact element = {<Home />}/>
        <Route path="/contacto" exact element = {<Contacto />}/>
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
