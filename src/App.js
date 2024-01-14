import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/details" element={<Detail/>} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
