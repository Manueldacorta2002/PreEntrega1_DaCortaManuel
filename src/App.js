import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; 

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Bienvenido a DA CORTA SOFTWARE</h1>} />
          {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
