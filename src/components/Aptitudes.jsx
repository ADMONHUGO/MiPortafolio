import estilos from '../modules/Aptitudes.module.css'

const AptitudesComponent = () => {
    return(
        <>
            <div className={estilos.titulo}>
                    APTITUDES
            </div>
            <div className={estilos.contenedor}>
                <div className={estilos.item}>
                    Atención a clientes
                </div>
                <div className={estilos.item}>
                    Respetuoso
                </div>
                <div className={estilos.item}>
                    Amigable
                </div>
                <div className={estilos.item}>
                    Compromiso
                </div>
                <div className={estilos.item}>
                    Habilidades informáticas
                </div>
            </div>            
        </>
    )
}

export default AptitudesComponent;