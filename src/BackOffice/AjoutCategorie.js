import {useState} from "react";

export default function AjoutCategorie() {
    const [categorie,setCategorie] = useState('');
    const handleClick = (e)=>{
        e.preventDefault();
        console.log(categorie);
        const token = localStorage.getItem("token");
        if (token) {
            fetch("https://voiture-backend-production.up.railway.app/inserer_categorie", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(categorie)
            }).then(() => {
                console.log("Ajout de categorie réussi!")
            })
        }
    }
    return(
        <form className="row g-3" >
            <div className="article-entry col-md-3 mt-3">
                <label htmlFor="categorie" className="form-label">Catégorie</label>
                <input type="text" className="form-control" name="categorie" value={categorie} onChange={(e)=>setCategorie(e.target.value)}/>
            </div>

            <div className="col-12 mt-3">
                <button type="submit" onClick={handleClick} className="btn btn-primary">Valider</button>
            </div>
        </form>
    );
}