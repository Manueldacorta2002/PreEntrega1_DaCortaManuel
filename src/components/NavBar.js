import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">DA CORTA SOFTWARE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/grafica">Gráficas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/procesadores">Procesadores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/memoria">Memorias RAM</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/almacenamiento">Almacenamiento</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/accesorios">Accesorios</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
