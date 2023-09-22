import estilos from '../modules/DatosPersonales.module.css'
import { FaAt, FaDochub, FaGithub } from 'react-icons/fa';
import pdf from '../../src/CurriculumVitae.pdf'
import HugoImg from '../imgs/FotoCVHugo.png'

const DatosPersonales = () => {
    return(
        <>
            <div className={estilos.contenedor}>
                <div className={estilos.subContenedor}>
                    <img className={estilos.imgnombre} src={HugoImg} alt="Hugo" />
                    <div className={estilos.textos}>
                        <p className={estilos.tituloNombre}>Mi nombre es Hugo Sánchez Mora</p>
                        <p>Soy una persona que le gusta el desarrollo web, así como implementar proyectos desde cero trabajando con el front-end, back-end y las bases de datos, además me gusta que el trabajo sea los más entendible para el usuario.</p>
                        <p>De igual forma me agrada el estar aprendiendo las nuevas técnologias para poder aplicarlas en el desarrollo de mi trabajo.</p>
                        <p className={estilos.bienvenidos}>Bienvenidos a mi portafolio como desarrollador FULLSTACK</p>
                        <p className={estilos.carrera}><FaDochub fontSize={18} /> Ingeniero en Sistemas Computacionales</p>
                        <p className={estilos.carrera}><FaAt fontSize={18}/> Hugo.Sanchez.Mora@hotmail.com</p>
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
                            <div className={estilos.github}>
                                <a href="https://github.com/ADMONHUGO" target='_blanck' title='GitHub' ><FaGithub fontSize={35} /></a>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        
        </>
    )
}

export default DatosPersonales;