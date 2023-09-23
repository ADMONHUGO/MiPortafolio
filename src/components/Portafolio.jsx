import estilos from '../modules/Portafolio.module.css';
import { FaLink } from "react-icons/fa";
import addendaImg from '/imgs/pa.png';
import residenciasImg from '/imgs/pr.png';
import PTMImg from '/imgs/pptm.png';
import GEPImg from '/imgs/pgep.png';



const PortafolioComponent = () => {
    return (
        <>
        <div className={estilos.titulo}>
            PORTAFOLIO
        </div>
        <div className={estilos.contenedor}>
            <div className={estilos.item}>
                <div className={estilos.imagen}>
                    <img className={estilos.imagen} src={addendaImg} alt="addendas" />
                </div>
                <div className={estilos.tituloItem}>
                    Sistema de addendas
                </div>
                <div className={estilos.descripcion}>
                    Se desarrollo un sistema web para la empresa YEZDO, el cual consta de agregar addendas a archivos XML.
                    <br />
                    <br />
                </div>
                <div className={estilos.tecnologias}>
                    <div className={estilos.html5}>
                        HTML5
                    </div>
                    <div className={estilos.css3}>
                        CSS3
                    </div>
                    <div className={estilos.js}>
                        JavaScript
                    </div>
                    <div className={estilos.bootstrap}>
                        Bootstrap
                    </div>
                    <div className={estilos.django}>
                        Django
                    </div>
                    <div className={estilos.python}>
                        Python
                    </div>

                </div>
                <div className={estilos.enlaces}>
                    <div className="url">
                        <a href="https://addendas.yezdo.com/" target='_blanck'><FaLink /></a>
                    </div>

                </div>
            </div>
            <div className={estilos.item}>
                <div className={estilos.imagen}>
                    <img className={estilos.imagen} src={residenciasImg} />
                </div>
                <div className={estilos.tituloItem}>
                    Sistema de residentes
                </div>
                <div className={estilos.descripcion}>
                    Se desarrollo un sistema web para la empresa YEZDO, que permita llevar el control de los residentes en su periodo de residencias dentro de la empresa.
                </div>
                <div className={estilos.tecnologias}>
                    <div className={estilos.html5}>
                        HTML5
                    </div>
                    <div className={estilos.css3}>
                        CSS3
                    </div>
                    <div className={estilos.js}>
                        JavaScript
                    </div>
                    <div className={estilos.bootstrap}>
                        Bootstrap
                    </div>
                    <div className={estilos.django}>
                        Django
                    </div>
                    <div className={estilos.python}>
                        Python
                    </div>
                    <div className={estilos.postgresql}>
                        Postgresql
                    </div>
                    <div className={estilos.jQuery}>
                        jQuery
                    </div>

                </div>
                <div className={estilos.enlaces}>
                    <div className="url">
                        <a href="https://residencias.yezdo.com/" target='_blanck'><FaLink /></a>
                    </div>

                </div>
            </div>
            <div className={estilos.item}>
                <div className={estilos.imagen}>
                    <img className={estilos.imagen} src={PTMImg} alt="PublicaTuMarca" />
                </div>
                <div className={estilos.tituloItem}>
                    PublicaTuMarca
                </div>
                <div className={estilos.descripcion}>
                    Se desarrollo un sistema web que permita a personas registrar su negocio o establecimiento con la finalidad de captar más usuarios y su información este disponible para quienes ocupen de sus servicios o productos.
                </div>
                <div className={estilos.tecnologias}>
                    <div className={estilos.reactJs}>
                        React Js
                    </div>
                    
                    <div className={estilos.js}>
                        JavaScript
                    </div>
                    <div className={estilos.bootstrap}>
                        Bootstrap
                    </div>
                    

                </div>
                <div className={estilos.enlaces}>
                    <div className="url">
                        <a href="https://publicatumarca.onrender.com/" target='_blanck'><FaLink /></a>
                    </div>

                </div>
            </div>
            <div className={estilos.item}>
                <div className={estilos.imagen}>
                    <img className={estilos.imagen} src={GEPImg} alt="GestionExpPlus" />
                </div>
                <div className={estilos.tituloItem}>
                    GestionExpPlus
                </div>
                <div className={estilos.descripcion}>
                    Se desarrollo el sistema GestionExpPlus, para que profesionistas puedan administrar las citas e información de sus clientes.
                    <br />
                    <br />
                </div>
                <div className={estilos.tecnologias}>
                    <div className={estilos.html5}>
                        HTML5
                    </div>
                    <div className={estilos.css3}>
                        CSS3
                    </div>
                    <div className={estilos.js}>
                        JavaScript
                    </div>
                    <div className={estilos.bootstrap}>
                        Bootstrap
                    </div>
                    <div className={estilos.django}>
                        Django
                    </div>
                    <div className={estilos.python}>
                        Python
                    </div>
                    <div className={estilos.postgresql}>
                        Postgresql
                    </div>
                    <div className={estilos.jQuery}>
                        jQuery
                    </div>

                </div>
                <div className={estilos.enlaces}>
                    <div className="url">
                        <a href="https://gestionexpplus.com/"><FaLink /></a>
                    </div>

                </div>
            </div>
        </div>
        
        </>
    )
}

export default PortafolioComponent;