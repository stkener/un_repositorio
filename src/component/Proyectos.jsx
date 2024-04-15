import React, { Fragment, useEffect, useState } from "react";
/*import { Card, Badge, Stack } from 'react-bootstrap';*/


import ahorcadoConsola from "./documents/AhorcadoConsola.png"
import batallaNaval from "./documents/batallaNaval.png"
import ahorcadoGrafico from "./documents/ahorcadoGrafico.png"
import estudioJuridico from "./documents/estudioJuridico.png"
import alegra from "./documents/alegra.png"
import tragos from "./documents/tragosPop.png"


import Barra from './Barra.jsx';
import Ficha from './Ficha.jsx';

const Proyectos = () => {
    const proyectosLista = [
        {
        "nombre":"Ahorcado en consola",
        "img":ahorcadoConsola,
        "tecnologias":["PYTHON"],
        "link":"https://github.com/stkener/Ahorcado.git"    
        },
    {
        "nombre":"Batalla Naval en consola",
        "img":batallaNaval,
        "tecnologias":["C"],
        "link":"https://github.com/stkener/Batalla_Naval.git"
    },
    {
        "nombre":"Ahorcado con Interfaz Grafica",
        "img":ahorcadoGrafico,
        "tecnologias":["PYTHON"],
        "link":"https://github.com/stkener/Ahorcado-con-interfaz-grafica.git"    
    },
    {
        "nombre":"Pagina Estudio Juridico",
        "img":estudioJuridico,
        "tecnologias":["HTML", "CSS", "JS"],
        "link":"https://github.com/stkener/Pagina-EJ-Zuccaro.git"
    },
    {
        "nombre":"Pagina Bazar",
        "img":alegra,
        "tecnologias":["HTML", "CSS", "JS"],
        "link":"https://github.com/stkener/Pagina-Alegra-Deco.git"
    },
    {
        "nombre":"Proyecto Final C. de Interf. de Usuarios",
        "img":tragos,
        "tecnologias":["HTML", "CSS", "NodeJS", "React"],
        "link":"https://github.com/stkener/proyectoFinalCIU-tragosPop"
    },
    ]
   
    return (
        <Fragment>
       <div>
            <Barra />
            <div className="containerFichaCuerpo">
                <Ficha />
                <div className="contenedorProyectos">
                    <div className="titulos paddinResponsive">PROYECTOS</div>
                    <div className="proyetosGrid">
                       {proyectosLista.map((proyecto, index) => (
                            <><section key={index} className="tarjetaProyectos">
                                
                                 <a href={proyecto.link} target="_blank">   
                                    <img 
                                        src={proyecto.img} 
                                        alt=""
                                        className="imagenTarjetaProyectos" 
                                        width={180} 
                                        height={100}
                                    />
                                    <div className="textoTarjetaProyectos">
                                        
                                            {proyecto.tecnologias.map(tec => (
                                                <span className="tecnologiasSpan" key={tec}>{tec}</span>
                                            ))} 
                                          
                                    </div>    
                                </a>
                                
                                
                                <h1 className="tituloTarjetaProyectos">{proyecto.nombre}</h1>
                                
                            </section></>
                        ))}
                    </div>
                </div>
            </div>
       </div> 
       </Fragment>
    );
}
export default Proyectos;
/*
<a href={proyecto.link}></a>

<p className="parrafoTarjetaProyectos"></p>

<div className="textoTarjetaProyectos">
                                    <h1 className="tituloTarjetaProyectos">{proyecto.nombre}</h1>
                                    <p className="parrafoTarjetaProyectos">
                                        {
                                            proyecto.tecnologias.map( (tec) => (
                                                <span className="tecnologiasSpan">{tec}</span>
                                            ))
                                        }  
                                    </p>
                                </div>
*/
/*
{showTecnologias && (
                                    <div className="textoTarjetaProyectos">
                                        <h1 className="tituloTarjetaProyectos">{proyecto.nombre}</h1>
                                        <p className="parrafoTarjetaProyectos">
                                            {
                                                proyecto.tecnologias.map(tec => (
                                                    <span className="tecnologiasSpan">{tec}</span>
                                                ))
                                            }
                                        </p>
                                    </div>
                                )}
*/