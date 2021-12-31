import React from 'react';
import "./Contacto.css"

const Contacto = () => {
    return (
        <div className="yellow-background">
            <form className="form">
                <div class="mb-3">
                    <label for="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="nombre@gmail.com"/>
                </div>
                <div class="mb-3">
                    <label for="mensaje" className="form-label">Mensaje</label>
                    <textarea id="mensaje" className="form-control" rows={5}></textarea>
                </div>
                <button type="button" className="btn btn btn-outline-danger">ENVIAR</button>
            </form>
        </div>
        
    );
}

export default Contacto;