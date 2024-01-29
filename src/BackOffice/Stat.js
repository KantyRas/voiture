import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Stat() {
    const [statistiques, setStatistiques] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("https://voiture-backend-production.up.railway.app/stat", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setStatistiques(response.data);
                })
                .catch(error => {
                    console.error('Error fetching stat:', error);
                });
        }
    }, []);

    return (

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Marque</th>
                        <th scope="col">Nombre annoncees</th>
                        <th scope="col">Annonces validés</th>
                    </tr>
                    </thead>
                    <tbody>
                    {statistiques.map(categ => (
                        <tr>
                            <th scope="row">{categ.marque}</th>
                            <td>{categ.nombreAnnonces}</td>
                            <td>{categ.nombreAnnoncesValidees}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

    );
}
