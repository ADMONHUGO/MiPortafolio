import estilos from '../modules/LenguajesHerramientas.module.css'
import logoPython from '../imgs/pythonLogo.png';
import logoDjango from '../imgs/djangoLogo.png';
import logoJavaScript from '../imgs/javascriptLogo.png';
import logoReact from '../imgs/reactLogo.webp';
import logoHTML5 from '../imgs/html5Logo.png';
import logoCSS3 from '../imgs/css3Logo.png';
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



const LenguajeHerramientasConponent = () => {
    return(
        <>

            <div className={estilos.titulo}>
                    LENGUAJES y HERRAMIENTAS
            </div>
            <div className={estilos.contenedor}>
                <div className={estilos.item}>
                     <img className={estilos.iconos} src={logoPython} alt="Python" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconosv2} src={logoDjango} alt="Django" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconos} src={logoJavaScript} alt="JavaScript" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconos} src={logoReact} alt="ReactJs" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconos} src={logoHTML5} alt="HTML5" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconos} src={logoCSS3} alt="CSS3" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconos} src={logoPostgresql} alt="Postgresql" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconos} src={logoScrum} alt="Scrum" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconosv3} src={logoPostman} alt="Postman" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconosv2} src={logoRestApi} alt="API Rest" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconos} src={logoGitHub} alt="GitHub" />
                </div>
                <div className={estilos.item}>
                    <img className={estilos.iconosv2} src={logoNPM} alt="NPM" />
                </div>
            </div>
            <div className={estilos.contenedor}>
                <div className={estilos.item}>
                     <img className={estilos.iconosv2} src={logoLinux} alt="Linux" />
                </div>
                <div className={estilos.item}>
                     <img className={estilos.iconosv3} src={logoNodeJS} alt="NodeJs" />
                </div>
                <div className={estilos.item}>
                     <img className={estilos.iconos} src={logoExpressJS} alt="ExpressJs" />
                </div>
                <div className={estilos.item}>
                     <img className={estilos.iconosv2} src={logoPLSQL} alt="PL/SQL" />
                </div>
            </div>
        
        </>
    )
}

export default LenguajeHerramientasConponent;