import React, { Fragment, useEffect, useState } from "react";

import fotoFicha from "./documents/foto_ficha.jpg";

import { ImLocation2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { LiaFileDownloadSolid } from "react-icons/lia";
import cvpdf from "./documents/CV_sebastian.pdf"
/**/
const Ficha = () => {
    return (
        <div className="fichaTecnica">
            <img src={fotoFicha} />
                
            <div className="contenedorInfoFicha">
                <p className="fuenteFicha">Sebastian Kener</p>
                <p className="fuenteFicha">Desarrollador Trainee/Jr</p>
                <p className="fuenteFicha"> <TfiEmail className="iconoInfoFicha"/> stkener@gmail.com</p>
                <p className="fuenteFicha"> <ImLocation2 className="iconoInfoFicha"/> Buenos Aires, Argentina</p>
            </div>
            <div className="contenedorBotonesFicha">
                <a className= "botonFicha" href="https://www.linkedin.com/in/sebastiankener/" title="Linkedin" target="_blank"><CiLinkedin className="tamanioIcono"/></a>
                <a className= "botonFicha" href="https://github.com/stkener" title="Github" target="_blank"><FaGithub className="tamanioIcono"/></a>
                <a className= "botonFicha" href={cvpdf} title="CV" target="_blank"><LiaFileDownloadSolid className="tamanioIcono"/></a>
            </div>
        </div>
    );
}
export default Ficha;