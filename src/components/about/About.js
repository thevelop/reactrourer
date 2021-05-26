import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'


export default class About extends Component {
    render() {
        return (
            <>
            <h2 className="cabecera-header">Acerca</h2>
            <p>Estás viendo la página Acerca</p>
            <Link className="link-button" to="/">Volver al inicio</Link>
            </>
        )
    }
}
