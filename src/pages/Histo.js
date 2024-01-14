import Header from "../components/Header";
import Historique from "../components/Historique";

export default function Histo(){
    return(
        <>
            <>
                <Header/>
                <br/>
                <br/>
            </>
            <>
                <center><h2>Historiques de mes annonces</h2></center>
                <br/>
                <Historique/>
            </>
        </>
    );
}