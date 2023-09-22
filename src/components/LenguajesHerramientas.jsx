import estilos from '../modules/LenguajesHerramientas.module.css'


const LenguajeHerramientasConponent = () => {
    return(
        <>

            <div className={estilos.titulo}>
                    LENGUAJES y HERRAMIENTAS
            </div>
            <div className={estilos.contenedor}>
                <div className={estilos.item}>
                    Python
                </div>
                <div className={estilos.item}>
                    Django
                </div>
                <div className={estilos.item}>
                    JavaScript
                </div>
                <div className={estilos.item}>
                    ReactJs
                </div>
                <div className={estilos.item}>
                    HTML5
                </div>
                <div className={estilos.item}>
                    CSS3
                </div>
                <div className={estilos.item}>
                    Postgresql
                </div>
                <div className={estilos.item}>
                    Metodologia ágiles
                </div>
                <div className={estilos.item}>
                    Postman
                </div>
                <div className={estilos.item}>
                    API Rest
                </div>
                <div className={estilos.item}>
                    GitHub
                </div>
            </div>
        
        </>
    )
}

export default LenguajeHerramientasConponent;