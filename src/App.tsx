import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>      Hi

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Container>
    
  )
}

export default App