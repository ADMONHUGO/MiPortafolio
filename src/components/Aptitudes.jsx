import estilos from '../modules/Aptitudes.module.css'

const AptitudesComponent = () => {
    return(
        <>
            <div className={estilos.titulo}>
                    APTITUDES
            </div>
            <div className={estilos.contenedor}>
                <div className={estilos.item}>
                    Relación con Clientes
                </div>
                <div className={estilos.item}>
                    Front-End
                </div>
                <div className={estilos.item}>
                    Back-End
                </div>
                <div className={estilos.item}>
                    Bases de Datos
                </div>
                <div className={estilos.item}>
                    Desarrollo y Diseño de Proyectos
                </div>
                <div className={estilos.item}>
                    Capacidad de Aprender Rapidamente
                </div>
            </div>
        </>
    )
}

export default AptitudesComponent;