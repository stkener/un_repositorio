import React, { Fragment, useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

/*import { Container, Button, Alert } from "react-bootstrap";*/



import About from './About.jsx';


const Home = () => {
    const [textoPresentacion, setTextoPresentacion] = useState('');
    const textoHome = [
        ["c", "o", "n", "s", "t", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", " ", "=", " ", "{"],
        ["  ","f", "u", "l", "l", "N", "a", "m", "e", ":", " ","'", "S", "e", "b", "a", "s", "t", "i", "a", "n", " ", "K", "e", "n", "e", "r", "'", ","],
        ["  ","s","e","n","i","o","r","i","t","y",":"," ","'","t","r","a","i","n","e","e","/","j","r","'",","],
       "}"
    ];

    let contadorLetra = -1;
    let contadorTexto = 0;

    const mostrarTexto = (texto) => {

        contadorLetra++;
        
        if (contadorTexto < texto.length) {
            if (texto[contadorTexto] && contadorLetra < texto[contadorTexto].length) {
                if (contadorLetra === texto[contadorTexto].length - 1) {
                    setTextoPresentacion(prevState => prevState + texto[contadorTexto][contadorLetra] + '\n');
                } else {
                    setTextoPresentacion(prevState => prevState + texto[contadorTexto][contadorLetra]);
                }
            } else {
                contadorTexto++;
                contadorLetra = -1;
            }
        }
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
            mostrarTexto(textoHome);
        }, 75);
        return () => clearInterval(timer);
    }, []);

    
    const [ocultar, setOcultar] = useState(false);

    useEffect(() => {
        localStorage.setItem('textoPresentacion', textoPresentacion);
    }, [textoPresentacion]);
    
    return (
        <Fragment>
            <div className="contenedorPresentacion">
                <pre>
                    <code className="formatoLetraHome">
                        {textoPresentacion}
                        <span className="cursor titila">&#95;</span>
                    </code>
                </pre>
            </div>
            <Link 
                to="/About" 
                className="contenedorFlecha" 
                onMouseEnter={() => setOcultar(true)} 
                onMouseLeave={() => setOcultar(false)}>
                    
                <span className={`formatoTituloFlecha ${ocultar ? "visible" : ""}`}>PORFOLIO</span>
                <span className="formatoFlecha"><BsChevronRight /></span>
            </Link>
        </Fragment>
    );
}

export default Home;

