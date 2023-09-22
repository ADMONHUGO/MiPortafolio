import estilos from '../modules/Header.module.css'

const HeaderCompoent = () => {
    return(
        <>
            <div className={estilos.menu}>
                <ul className={estilos.listItem}>
                    <li className={estilos.item}>Formación</li>
                    <li className={estilos.item}>Historia</li>
                    <li className={estilos.item}>Resumen Profesional</li>
                </ul>
          </div>
        
        </>
    )
}

export default HeaderCompoent;