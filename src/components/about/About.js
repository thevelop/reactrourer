import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import '../../App.css'


export default class About extends Component {
    render() {
        return (
            <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Acerca - Ejemplo de routing con React Router DOM</title>
                <meta name="description" content="Acerca - Ejemplo de uso de React Router DOM en aplicación con componentes estáticos y conexión a API REST" />
                <link rel="canonical" href="http://ejemplorouting.com/acerca" />
                </Helmet>
            <h2 className="cabecera-header">Acerca</h2>
            <p>Estás viendo la página Acerca</p>
            <Link className="link-button" to="/">Volver al inicio</Link>
            </>
        )
    }
}
