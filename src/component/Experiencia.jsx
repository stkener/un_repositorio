import React, { Fragment, useEffect, useState } from "react";

import Barra from './Barra.jsx';
import Ficha from './Ficha.jsx';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Experiencia = () => {
    const expeiriencias =[
        {
            "Puesto":"Gestor de aplicaciones de soporte",
            "Empresa":"Caja de Retiros, Jubilaciones y Pensiones de la Policía Federal",
            "desdeHasta":"Oct.2021 – Mar. 2023",
            "funciones":["Desarrollo y mantenimiento de funcionalidades en el sistema de la Institución",
                         "Prueba e implementación de las aplicaciones informáticas de la Institución",
                         "Mantenimiento y soporte de las aplicaciones informáticas de la Institución",
                        ],
            "tecnologias":["Base de datos Informix",
                           "SQL",
                           "Genero Business Development Language (BDL) - Informix 4GL"
                          ]
        },
    ]
/**/
    const otrasExperiencias=[
    {
        "Puesto":"Practica docente - Docente nivel inicial",
        "Empresa":"Jardin de caracter comunitario n°1 - San Vicente de Paul",
        "desdeHasta":"Abr. 2023 – Nov. 2023",
        "funciones":["Preparacion de las clases basados en el diseño curricular",
                     "Dar clases de educacion fisica en sala de 5 años"]    
    },
    
    {
        "Puesto":"Operario de expedición",
        "Empresa":"Demibell SACIFI – Caro Cuore",
        "desdeHasta":"Ene. 2017 – Oct. 2019",
        "funciones":["Picking (preparación de pedidos)",
                     "Control de stock",
                     "Ingreso de mercadería",
                     "Preparado de envíos y separación por zonas, expresos o correo",
                     "Mantenimiento de estanterías",
                     "Acompañante de chofer",
                     "Ayudante de Avios"]    
    },

    {
        "Puesto":"Operario de expedición",
        "Empresa":"Demibell SACIFI – Caro Cuore",
        "desdeHasta":"Ago. 2016 – Nov. 2016",
        "funciones":["Picking (preparación de pedidos)",
                     "Control de stock",
                     "Ingreso de mercadería",
                     "Preparado de envíos y separación por zonas, expresos o correo",
                     "Mantenimiento de estanterías",
                     "Acompañante de chofer"]
    },

    {
        "Puesto":"Operario de expedición",
        "Empresa":"Demibell SACIFI – Caro Cuore",
        "desdeHasta":"Nov. 2015 – Mar. 2016",
        "funciones":["Picking (preparación de pedidos)",
                     "Control de stock",
                     "Ingreso de mercadería",
                     "Preparado de envíos y separación por zonas, expresos o correo",
                     "Mantenimiento de estanterías",
                     "Acompañante de chofer"]
    },
    
    {    
        "Puesto":"Vendedor (corredor)",
        "Empresa":"Distribuidora Pablo SA",
        "desdeHasta":"Abr. 2013 – Ene. 2014",
        "funciones":["Atención al cliente: Recorrer las zonas indicadas, vendiendo los productos de la distribuidora",
                     "Sumar clientes a la cartera",
                     "Realizar los remitos por sistema"]
    },

    {    
        "Puesto":"Redactor Ad – honorem",
        "Empresa":"Revista Yudo-Karate – publicación bimestral",
        "desdeHasta":"2013",
        "funciones":["Redactar artículos para ser publicados"]
    },

    {    
        "Puesto":"Operario de expedición",
        "Empresa":"Cresko SA – Grisino",
        "desdeHasta":"Abr. 2011 - Mar. 2012",
        "funciones":["Picking (preparación de pedidos)",
                     "Control de stock",
                     "Ingreso de mercadería",
                     "Preparado de envíos y separación por zonas, expresos o correo",
                     "Mantenimiento de estanterías",
                     "Acompañante de chofer"]
    },

    {    
        "Puesto":"Vendedor (corredor)",
        "Empresa":"FHERSEL SRL",
        "desdeHasta":"Jun. 2009 – Dic. 2010",
        "funciones":["Atención al cliente: Recorrer las zonas indicadas, vendiendo los productos de la distribuidora",
                     "Sumar clientes a la cartera",
                     "Realizar los remitos por sistema"]
    }
    ]

    const [mostrarInformacion, setMostrarInformacion] = useState(false);

    const expandir = () => {
        setMostrarInformacion(!mostrarInformacion);
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
                    <div className="contenidoGridCuerpo cuerpoExperiencia">
                        {
                           expeiriencias.map((e, index) => (
                            <article key={index} class="articuloTrabajo">
                                <div className="contenedorInicioExpe">
                                    <span className="letraPuestoTrabajo">{e.Puesto}</span>
                                    <span className="letraTrabajoCursiva">{e.Empresa}</span>
                                    <span className="letraTrabajoCursiva">{e.desdeHasta}</span>           
                                </div>
                                <div className="">
                                    <p className="subTitulos">FUNCIONES</p>
                                    <ul className="estiloListaTrabajo letraTrabajo">
                                        {e.funciones.map((f, index) => (
                                            <li key={index}>{f}</li>
                                        ))
                                        }
                                    </ul>                                    
                                </div>
                                <div className="">
                                    <p className="subTitulos">TECNOLOGIAS</p>
                                    <ul className="estiloListaTrabajo letraTrabajo">
                                        {e.tecnologias.map((t, index) => (
                                            <li key={index}>{t}</li>
                                        ))
                                        }
                                    </ul>                                    
                                </div>
                            </article>
                           )) 
                        }
                    </div>
                    <div className="contenidoGridCuerpo">
                        <div className="contenedorTituloIconoExp">
                            <p className="letraPuestoTrabajo">Experiencias fuera de informatica</p>
                            <button onClick={expandir} className="estiloBotonExpandible ">
                                {mostrarInformacion ? 
                                    <span className="estiloIconoBotonExp"><IoIosArrowUp /></span> 
                                    : 
                                    <span className="estiloIconoBotonExp"><IoIosArrowDown /></span>
                                }
                            </button>
                        </div>
                        {mostrarInformacion && (
                            otrasExperiencias.map((e, index) => (
                                <article key={index} class="articuloTrabajo cuerpoExperiencia">
                                    <div className="contenedorInicioExpe">
                                        <span className="letraPuestoTrabajo">{e.Puesto}</span>
                                        <span className="letraTrabajoCursiva">{e.Empresa}</span>
                                        <span className="letraTrabajoCursiva">{e.desdeHasta}</span>           
                                    </div>
                                    <div className="">
                                        <p className="subTitulos">FUNCIONES</p>
                                        <ul className="estiloListaTrabajo letraTrabajo">
                                            {e.funciones.map((f, index) => (
                                                <li key={index}>{f}</li>
                                                ))
                                            }
                                        </ul>                                    
                                </div>
                                </article>
                            )) 
                        )}
                    </div>
                </div>
            </div>
       </div> 
       </Fragment>
    );
}
export default Experiencia;

/*
</button>
*/



/*
<article class="">
                            <p><span class="">Gestor de aplicaciones de soporte</span><br>
                            <span class="">Caja de Retiros, Jubilaciones y Pensiones de la Policía Federal</span><br>
                            <span class="">{}</span></p>

                            <p class="letraTrabajo estiloSubtituloTrabajo">FUNCIONES</p>
                            <ul class="letraTrabajo estiloListaTrabajo">
                                <li>Desarrollo y mantenimiento de funcionalidades en el sistema de la Institución.</li>
                                <li>Prueba e implementación de las aplicaciones informáticas de la Institución.</li>
                                <li>Mantenimiento y soporte de las aplicaciones informáticas de la Institución.</li>
                            </ul>

                            <p class="letraTrabajo estiloSubtituloTrabajo">TECNOLOGIAS</p>
                            <ul class="letraTrabajo estiloListaTrabajo">
                                <li>Base de datos Informix</li>
                                <li>SQL</li>
                                <li>Genero Business Development Language (BDL) - Informix 4GL</li>
                            </ul>
                        </article>
*/