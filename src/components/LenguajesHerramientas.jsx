import estilos from '../modules/LenguajesHerramientas.module.css'
import logoPython from '../imgs/pythonLogo.png';
import logoDjango from '../imgs/djangoLogo.png';
import logoJavaScript from '../imgs/javascriptLogo.png';
import logoReact from '../imgs/reactLogo.webp';
import Git from '../imgs/git.png';
import logoPostgresql from '../imgs/postgresqlLogo.webp';
import logoPostman from '../imgs/postmanLogo.png';
import logoRestApi from '../imgs/restapiLogo.png';
import logoGitHub from '../imgs/githubLogo.png';
import logoScrum from '../imgs/scrumLogo.png';
import logoNPM from '../imgs/npmLogo.png';
import logoLinux from '../imgs/linuxLogo.webp';
import logoNodeJS from '../imgs/nodejsLogo.webp';
import logoExpressJS from '../imgs/expressLogo.webp';
import logoPLSQL from '../imgs/plsqlLogo.png';
import logoBoostrap from '../imgs/bootstrap.png';

import { useEffect } from 'react';




const LenguajeHerramientasConponent = () => {
  const graficasFunc = () => {
        document.getElementById('contenedorGrafico').style.display = 'block';
        document.getElementById('contenedorTexto').style.display = 'none';
        document.getElementById("btnTabInfo").classList.remove('tabsItemsActivo');
        document.getElementById("btnTabGrafico").classList.add('tabsItemsActivo');

        
    };
    const InformacionFunc = () => {
        document.getElementById('contenedorGrafico').style.display = 'none';
        document.getElementById('contenedorTexto').style.display = 'block';
        document.getElementById("btnTabInfo").classList.add('tabsItemsActivo');
        document.getElementById("btnTabGrafico").classList.remove('tabsItemsActivo');

    };
   

    useEffect(() => {
        document.getElementById('contenedorTexto').style.display = 'none';
        // document.getElementById("btnTabGrafico").classList.add('tabsItemsActivo');
        // document.getElementById("btnTabInfo").classList.add('tabsItemsInactivo');
        

       

    }, []);
    return(
        <>

            <div className={estilos.titulo}>
                    TECNOLOGÍAS
            </div>
            <div className="tabs">
                <div  >
                    <button onClick={graficasFunc} id='btnTabGrafico' className='tabsItemsInactivo tabsItemsActivo'>Ilustración</button>
                </div>
                <div >
                    <button onClick={InformacionFunc} id='btnTabInfo' className='tabsItemsInactivo' >Detalles</button>
                </div>
            </div>
            <div id='contenedorGrafico' >
                    <h4 className={estilos.subTitulo}>Desarrollo Frontend</h4>
                <div className={estilos.contenedor}>
                    
                    <div className={estilos.item} title='Django'>
                        <img className={estilos.iconosv2} src={logoDjango} alt="Django" />
                    </div>
                    <div className={estilos.item} title='React JS'>
                        <img className={estilos.iconos} src={logoReact} alt="ReactJs" />
                    </div>
                    <div className={estilos.item} title='Bootstrap'>
                        <img className={estilos.iconos} src={logoBoostrap} alt="Bootstrap" />
                    </div>
                </div>
                <h4 className={estilos.subTitulo}>Desarrollo Backend</h4>
                <div className={estilos.contenedor}>
                    <div className={estilos.item} title='Python'>
                        <img className={estilos.iconos} src={logoPython} alt="Python"/>
                    </div>
                    <div className={estilos.item} title='JavaScript'>
                        <img className={estilos.iconos} src={logoJavaScript} alt="JavaScript" />
                    </div>
                    <div className={estilos.item} title='Node JS'>
                        <img className={estilos.iconosv3} src={logoNodeJS} alt="NodeJs" />
                    </div>
                    <div className={estilos.item} title='Express'>
                        <img className={estilos.iconos} src={logoExpressJS} alt="ExpressJs" />
                    </div>
                    <div className={estilos.item} title='NPM'>
                        <img className={estilos.iconosv2} src={logoNPM} alt="NPM" />
                    </div>
                    <div className={estilos.item} title='API REST'>
                        <img className={estilos.iconosv2} src={logoRestApi} alt="API Rest" />
                    </div>
                </div>
                <h4 className={estilos.subTitulo}>Base de datos, entre otros</h4>
                <div className={estilos.contenedor}>
                    <div className={estilos.item} title='PL/SQL'>
                        <img className={estilos.iconosv2} src={logoPLSQL} alt="PL/SQL" />
                    </div>
                    <div className={estilos.item} title='PostgreSQL'>
                        <img className={estilos.iconos} src={logoPostgresql} alt="Postgresql" />
                    </div>
                    <div className={estilos.item} title='Git'>
                        <img className={estilos.iconos} src={Git} alt="Git" />
                    </div>
                    <div className={estilos.item} title='Metodología SCRUM'>
                        <img className={estilos.iconos} src={logoScrum} alt="Scrum" />
                    </div>
                    <div className={estilos.item} title='Linux'>
                        <img className={estilos.iconosv2} src={logoLinux} alt="Linux" />
                    </div>
                    <div className={estilos.item} title='Postman'>
                        <img className={estilos.iconosv3} src={logoPostman} alt="Postman" />
                    </div>
                </div>

            </div>
            <div id='contenedorTexto'>
                <div className={estilos.fila}>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>Python</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>Django</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>JavaScript</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>React Js</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={estilos.fila}>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>PostgreSQL</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Avanzado</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>SCRUM</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Básico</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>POSTMAN</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Básico</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>REST API</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>Git</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>NPM</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={estilos.fila}>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>Linux</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Básico</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>Node Js</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>Express</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>PL/SQL</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Intermedio</span>
                            </div>
                        </div>
                    </div>
                    <div className={estilos.columna}>
                        <div className={estilos.card}>
                            <div className={estilos.cardTitle} >
                                <span>Bootstrap</span>
                            </div>
                            <div className={estilos.cardBody}>
                                <span>Nivel: Avanzado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default LenguajeHerramientasConponent;