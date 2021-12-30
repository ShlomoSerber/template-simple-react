import React from 'react';
import "./Homersapien.css";
import homersapien from "../../img/carrousel-3.jpg";

class Homersapien extends React.Component {
    render() { 
        return <img src={homersapien} alt="carrousel-3.jpg" className="img-fluid"/>;
    }
}
 
export default Homersapien;