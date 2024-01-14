import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Histo from "./pages/Histo";
import Fav from "./pages/Fav";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/details" element={<Detail/>} />
                <Route path="/" element={<Home />} />
                <Route path="/historiques" element={<Histo />} />
                <Route path="/favoris" element={<Fav />} />
            </Routes>
        </Router>
    );
}

export default App;
