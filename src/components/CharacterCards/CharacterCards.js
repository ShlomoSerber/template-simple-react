import React from 'react';
import maggie from "../../img/maggie.jpg";
import homer from "../../img/homer.jpg";
import bart from "../../img/bart.jpg";

class CharacterCards extends React.Component {
    render() { 
        return (
            <div className="container-fluid row" style={{backgroundColor: "#cfcc2f", justifyContent: "space-around"}}>
                <div className="card" style={{width: "18rem", margin: "3rem 2rem"}}>
                    <img src={maggie} className="card-img-top" alt="maggie.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Maggie</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary bg-danger border-danger">Leer mas...</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem", margin: "3rem 2rem"}}>
                    <img src={homer} className="card-img-top" alt="maggie.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Homero</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary bg-danger border-danger">Leer mas...</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem", margin: "3rem 2rem"}}>
                    <img src={bart} className="card-img-top" alt="maggie.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Bart</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary bg-danger border-danger">Leer mas...</a>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default CharacterCards;