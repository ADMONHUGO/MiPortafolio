import estilos from '../modules/DatosPersonales.module.css'
import { FaAt, FaDochub, FaGithub, FaLinkedin  } from 'react-icons/fa';
import pdf from '../../src/CurriculumVitae.pdf'
import HugoImg from '../imgs/FotoCVHugo.png'


const DatosPersonales = () => {
    return(
        <>
        <div className= {estilos.imagenFondo}>
            <div className={estilos.contenedor}>
                <div className={estilos.subContenedor}>
                    <img className={estilos.imgnombre} src={HugoImg} alt="Hugo" />
                    <div className={estilos.textos}>
                        <p className={estilos.tituloNombre}>Mi nombre es Hugo Sánchez Mora</p>
                        <h3>Sobre mi</h3>
                        <p className={estilos.textoDescriptivo}>Me gusta el desarrollo de páginas web, así como aprender nuevas tecnologías, que permitan seguir desarrollandome profesionalmente.</p>
                        <p className={estilos.textoDescriptivo}>Con el paso del tiempo he podido desarrollar algunos sistemas web y poder adquirir conocimientos que me han permitido expandir más mis hábilidades. </p>
                        <p className={estilos.bienvenidos}>Bienvenidos a mi portafolio como desarrollador web FULLSTACK</p>
                        <p className={estilos.carrera}><FaDochub fontSize={18} /> Ingeniero en Sistemas Computacionales</p>
                        <p className={estilos.correo}><FaAt fontSize={18}/> Hugo.Sanchez.Mora@hotmail.com</p>
                        <div className={estilos.contenedorCV}>
                            <button className={estilos.btnDescCV}>
                                <a href={pdf} target="_blank" rel="noopener noreferrer" download="HugoSanchezMoraCV.pdf"> 
                                Descargar CV 
                                </a>
                            </button>
                        </div>
                        <div className={estilos.idiomas}>
                            <p className={estilos.tituloIdiomas}>Idiomas:</p>
                            <div className={estilos.espanol}>
                                Español: Idioma Nativo
                            </div>
                            <div className={estilos.ingles}>
                                Ingles: B1 - Intermedio
                            </div>
                        </div>
                        <div className={estilos.redesSociales}>
                            
                                <a href="https://github.com/ADMONHUGO" className={estilos.margen} target='_blanck' title='GitHub' ><FaGithub fontSize={35} /></a>  
                                <a href="https://www.linkedin.com/in/hugo-sanchez-mora135790/" target='_blanck' title='LINKEDIN' ><FaLinkedin  fontSize={35} /></a>
                        
                                
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default DatosPersonales;