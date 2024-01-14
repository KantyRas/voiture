import "../assets/css/card.css";
import 'bootstrap/dist/css/bootstrap.css';
import voiture from "../assets/images/voiture.jpg";
import React from "react";
import {Link} from "react-router-dom";

function Card() {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <div className="img-container">
                    <img src={voiture} className="card-img-top" alt="Car" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Nom du Produit</h5>
                    <p className="card-text">Type de Produit</p>
                </div>
                <div className="mb-3 d-flex justify-content-around align-items-center">
                    <h3>2500</h3>
                    <Link to="/details" className="btn btn-primary">Détails</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
