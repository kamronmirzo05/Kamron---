import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";


import './app.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    )
}

export default App;

// className