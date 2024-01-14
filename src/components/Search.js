import "../assets/css/search-bar.css";

function Search (){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="search-container">
                        <input type="text" className="form-control search-input" placeholder="Rechercher..."/>
                            <button className="btn btn-primary">Rechercher</button>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <select className="form-control">
                                <option selected>Filtre 1</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <select className="form-control">
                                <option selected>Filtre 2</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <select className="form-control">
                                <option selected>Filtre 3</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <select className="form-control">
                                <option selected>Filtre 4</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <select className="form-control">
                                <option selected>Filtre 5</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Search;