import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Histo from "./pages/Histo";
import Fav from "./pages/Fav";
import Login from "./components/Login";
import Register from "./components/Register";
import Content from "./BackOffice/components_template/Content";
import Acceuil from "./BackOffice/pages_admin/Acceuil";
import { Navigate } from "react-router-dom";
import Categorie from "./BackOffice/Categorie";
import AjoutCategorie from "./BackOffice/AjoutCategorie";
import Marque from "./BackOffice/Marque";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/details" element={<Detail />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/favoris" element={<Fav />} />
                <Route path="/historiques" element={<Histo />} />
                <Route path="/acceuil" element={<Acceuil contenu={Content} />} />
                <Route path="/categories" element={<Acceuil contenu={Categorie} />} />
                <Route path="/ajout_categorie" element={<Acceuil contenu={AjoutCategorie} />} />
                <Route path="/marques" element={<Acceuil contenu={Marque} />} />
            </Routes>
        </Router>
    );
}

export default App;
