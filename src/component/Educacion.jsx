import React, { Fragment, useEffect, useState } from "react";

import { IoCloseOutline } from "react-icons/io5";

import Barra from './Barra.jsx';
import Ficha from './Ficha.jsx';

import desWeb from "./documents/desarrolloWeb.jpg"
import segInf from "./documents/nDesSegInf.jpg"
import introCib from "./documents/introCiberDel.jpg"
import repCel from "./documents/repCel.jpg"
import cerraj from "./documents/cerrajeriaCert.jpg"
import intElect from "./documents/introElect.jpg"

const Educacion = () => {
    const titulos=[
    {
        "titulo":"Tecnicatura Universitaria en Programacion",
        "institucion":"Uiversidad Nacional de Hurlingham (UNAHUR)",
        "año":"presente"
    },
    {
        "titulo":"Profesorado de Educacion Fisica",
        "institucion":"I.S.F.D.y T. Nº 209 'Ceferino Namuncurá'",
        "año":"presente"   
    },
    {
        "titulo":"Técnico Superior en Periodismo deportivo",
        "institucion":"Instituto Superior de Actividades Deportivas (ISAD)",
        "año":"2012"
    }
    ];

    const cursos=[
    {
        "nombre":"Desarrollo Web",
        "img":desWeb,
        "año":"2020"
        
    },
    {
        "nombre":"Des. Seg. Informatica",
        "img":segInf,
        "año":"2022"   
    },
    {
        "nombre":"Intr. al ciberdelito",
        "img":introCib,
        "año":"2022"
    }
    ];

    const otrosCursos=[
    {
        "nombre":"Reparacion de celulares",
        "img":repCel,
        "año":"2019"    
    },
    {
        "nombre":"Cerrajeria",
        "img":cerraj,
        "año":"2016"   
    },
    {
        "nombre":"Intr. a la electronica",
        "img":intElect,
        "año":"2014"
    }
    ];/**/

    const [mostrarGaleria, setMostrarGaleria] = useState(false);
    const [imagenSeleccionada, setImagenSeleccionada] = useState('');

    const mostrarImagen = (src) => {
        setImagenSeleccionada(src);
        setMostrarGaleria(true);
    };

    const cerrarGaleria = () => {
        setMostrarGaleria(false);
    };

    return (
       <Fragment>
       <div>
            <Barra />
            <div className="containerFichaCuerpo">
                <Ficha />
                <div className="contenedorProyectos">
                    <div className="titulosCuerpo titulos paddinResponsive">
                        EXPERIENCIA
                    </div>
                    <div className="contenidoGridCuerpo">
                        {
                            titulos.map((t, index) => (
                                <article key={index} className="articuloTrabajo marginEducacion">
                                    <div className="contenedorInicioExpe">
                                        <span className="letraPuestoTrabajo">{t.titulo}</span>
                                        <span className="letraTrabajoCursiva">{t.institucion}</span>
                                        <span className="letraTrabajoCursiva">{t.año}</span>           
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                    <div className="titulosCuerpo titulos paddinResponsive">
                        CURSOS
                    </div>
                    <div className="contenedorGridCursos">
                        {
                            cursos.map((c, index) => (
                                <article key={index} className="contenedorArticuloCursos">
                                    <p className="cursoLetra">{c.nombre}</p>
                                    <img 
                                        key={index} 
                                        className="imagenCursos" 
                                        src={c.img} 
                                        title={c.nombre}
                                        onClick={(e) => mostrarImagen(c.img)}
                                    />
                                    <p className="cursoLetra">{c.año}</p>
                                </article>
                            ))
                        }
                    </div>
                    <div className="titulosCuerpo titulos paddinResponsive">
                        OTROS CURSOS
                    </div>
                    <div className="contenedorGridCursos">
                        {
                            otrosCursos.map((c, index) => (
                                <article key={index} className="contenedorArticuloCursos">
                                    <p className="cursoLetra">{c.nombre}</p>
                                    <img 
                                        key={index} 
                                        className="imagenCursos" 
                                        src={c.img} 
                                        title={c.nombre}
                                        onClick={(e) => mostrarImagen(c.img)}
                                    />
                                    <p className="cursoLetra">{c.año}</p>
                                </article>
                            ))
                        }
                    </div>
                    {mostrarGaleria && (
                        <div 
                            id="galeria" 
                            className="contenedorGaleria" 
                            onClick={cerrarGaleria}
                        >
                            <img 
                                className="imagenGaleria"
                                id="imgGal" 
                                src={imagenSeleccionada} 
                                alt="Imagen seleccionada" 
                            />
                            <button 
                                className="botonGaleria" 
                                onClick={cerrarGaleria}
                            >
                                <IoCloseOutline />
                            </button>
                        </div>
                    )}
                </div>
            </div>
       </div> 
       </Fragment> 
    );
}
export default Educacion;