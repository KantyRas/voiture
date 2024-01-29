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
import AjoutMarque from "./BackOffice/AjoutMarque";
import Validation from "./BackOffice/Validation";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login/email=test@gmail.com/mdp=0000" element={<Login />} />

                <Route path="/" element={<Navigate to="/login/email=test@gmail.com/mdp=0000" />} />
                <Route path="/details" element={<Detail />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/favoris" element={<Fav />} />
                <Route path="/historiques" element={<Histo />} />
                <Route path="/acceuil" element={<Acceuil contenu={Content} />} />
                <Route path="/categories" element={<Acceuil contenu={Categorie} />} />
                <Route path="/ajout_categorie" element={<Acceuil contenu={AjoutCategorie} />} />
                <Route path="/ajout_marque" element={<Acceuil contenu={AjoutMarque} />} />
                <Route path="/marques" element={<Acceuil contenu={Marque} />} />
                <Route path="/validation" element={<Acceuil contenu={Validation} />} />
            </Routes>
        </Router>
    );
}

export default App;
