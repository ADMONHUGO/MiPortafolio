import estilos from '../modules/DatosPersonales.module.css'
import { FaAt, FaGithub, FaLinkedin, FaSchool, FaAward  } from 'react-icons/fa';
import pdf from '../../src/CurriculumVitae.pdf'
import HugoImg from '../imgs/FotoCVHugo.jpeg'


const DatosPersonales = () => {
    return(
        <>
        <div className= {estilos.imagenFondo}>
            <div className={estilos.contenedor}>
                <div className={estilos.subContenedor}>
                    <img className={estilos.imgnombre} src={HugoImg} alt="Hugo" />
                    <div className={estilos.textos}>
                        <p className={estilos.tituloNombre}>Mi nombre es <b>Hugo Sánchez Mora</b></p>
                        <h3>Sobre mi</h3>
                        <p className={estilos.textoDescriptivo}>Programador con amplia experiencia en el desarrollo web y gran gusto por el desarrollo de sistemas. Empleo mis habilidades y aptitudes parar ofrecer buenos resultados. Busco aportar mis conocimientos a una empresa orientada a los resultados.</p>
                        <p className={estilos.bienvenidos}>Bienvenidos a mi portafolio como desarrollador web FULLSTACK</p>
                        <p className={estilos.escuela}><FaSchool fontSize={18}/> Instituto Técnologico Superior de Ciudad Hidalgo</p>
                        <p className={estilos.carrera}><FaAward fontSize={18} /> Ingeniero en Sistemas Computacionales</p>
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