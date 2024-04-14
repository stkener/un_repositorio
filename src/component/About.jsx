import React, { Fragment, useEffect, useState } from "react";
/**/

import python_ico from "./documents/Python-logo.png";
import kotlin_ico from "./documents/Kotlin_logo.png";
import html_ico from "./documents/HTML-logo.png";
import css_ico from "./documents/CSS-logo.png";
import nodejs_ico from "./documents/nodejs-icono.png";
import react_ico from "./documents/React-icono.png";
import sql_ico from "./documents/Sql-logo.png";
import mysql_ico from "./documents/MySQL-icono.png";
import c_ico from "./documents/c-ico.png";

import Barra from './Barra.jsx';
import Ficha from './Ficha.jsx';

const About = () => {
    const iconos = [
            python_ico,
            kotlin_ico,
            html_ico,
            css_ico,            
            nodejs_ico,
            react_ico,            
            sql_ico,            
            mysql_ico,            
            c_ico            
    ]

   
    return (
        <div className="contenedorAboutGeneral">
            <Barra />
            <div className="containerFichaCuerpo">
            <Ficha />
            <div className="contenedorAboutSkills">

                <div className="contenedorParrafoAbout">
                    <h1 className="titulos">ABOUT</h1>
                    
                    <p className="fuenteParrafosAbout">
                        Conocí la programación cursando la carrera de ingeniería en electrónica, 
                        ahí aprendí y utilice el lenguaje C.
                    </p> 
                    <p className="fuenteParrafosAbout">
                        Con esta pequeña introducción descubrí lo apasionante que podía ser el 
                        mundo de la programacion, por eso decidí seguir plenamente este camino, 
                        ingrese en la Universidad Nacional de Hurlingham (UNAHUR), donde 
                        profundice y amplie todos mis conocimientos.
                    </p>
                    <p className="fuenteParrafosAbout">
                        De a poco sume nuevas habilidades, la programación orientada a objetos, 
                        el funcionamiento de una base de datos utilizando Enterprise Architect 
                        para el diseño y MariaDB para la implementación con SQL. Aplique Python  
                        con estructuras de datos como listas enlazadas, colas, pilas y arboles 
                        binarios de búsqueda. Con Kotlin adquiri los principales patrones de 
                        diseño, trabajando mucho con github y el IDE Intellij Idea.
                    </p>
                    
                </div>
                <div className="contenedorHabilidades">
                    <p className="titulos">SKILLS</p>
                    
                    <div className="contenedorSkills">
                        {iconos.map((icono, index) => (
                            <img key={index} src={icono} alt={`Icono ${index}`} className="imagenLogos"/>
                        ))}
                    </div>
                </div>
            
            </div>
            </div>
        </div>
    );
}
export default About;