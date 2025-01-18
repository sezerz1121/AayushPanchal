import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import HorizontalScroll from './horizontalScroll.jsx';
import FullPage from './FullPage.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullPage />} />
       <Route path="/horizontal-scroll" element={<HorizontalScroll />} />
      </Routes>
</Router>
  )
}

export default App