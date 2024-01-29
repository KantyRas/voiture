import {useEffect, useState} from "react";
import axios from "axios";

export default function Categorie(){

        const token = localStorage.getItem("token");
        const[categories,setCategories] = useState([]);

        useEffect(() => {
            if (token) {
                axios.get("https://voiture-backend-production.up.railway.app/liste_categorie")
                    .then(response => {
                        setCategories(response.data);
                    })
                    .catch(error => {
                        console.error('Error fetching categories:', error);
                    });
            }
        }, [token]);


    return(
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Categorie</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {categories.map(categ=>(
                    <tr>
                    <th scope="row" key={categ.idcategorie}>{categ.idcategorie}</th>
                    <td>{categ.categorie}</td>
                    <td>update</td>
                    <td>delete</td>
                    </tr>
                ))
                }
                </tbody>
            </table>
    );
}