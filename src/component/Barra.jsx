import React, { Fragment, useEffect, useState } from "react";
/*import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";*/
import { HashRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

import { FaHome } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { FaBook } from "react-icons/fa";


const Barra = () => {
    const [menuActivo, setMenuActivo] = useState(false);

    const activarMenu = () => {
        setMenuActivo(!menuActivo);
    };


    return (
            <div className="estiloBarraMenu">
            
                <div className={`contenedorIconoMenu ${menuActivo ? 'cruz' : ''}`} onClick={activarMenu}>
                    <span className="lineaUno"></span>
                    <span className="lineaDos"></span>
                    <span className="lineaTres"></span>
                </div>
                <div >
                    <ul className={`estiloLista ${menuActivo ? 'activo' : ''}`}>
                        <li className="itemLista">
                            <Link to="/" className="estiloLink">
                                <span className="transformacionPalabra">HOME</span> 
                                <span className="transformacionIcono"><FaHome /></span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/About" className="estiloLink">
                                <span className="transformacionPalabra">ABOUT</span> 
                                <span className="transformacionIcono"><BsPersonFill /></span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/Proyectos" className="estiloLink">
                                <span className="transformacionPalabra">PROYECTOS</span> 
                                <span className="transformacionIcono"><FaGears /></span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/Experiencia" className="estiloLink">
                                <span className="transformacionPalabra">EXPERIENCIA</span> 
                                <span className="transformacionIcono"><FaWrench /></span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/Educacion" className="estiloLink">
                                <span className="transformacionPalabra">EDUCACION</span> 
                                <span className="transformacionIcono"><FaBook /></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            
            
        </div>
    );
}

export default Barra;
