import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'


export default class Default extends Component {
    render() {
        return (
            <>
             <nav className="menu">
                <Link to="/">Inicio</Link> |
                <Link to="/acerca">Acerca</Link> |
                <Link to="/nourl">Error 404</Link> |
                <Link to="/category/peliculas">Category: Películas</Link> |
                <Link to="/category/fail">Category: Error (Con redirect)</Link> |
                <Link to="/sample/42/isac">Ejemplo 2: Con 2 parámetros</Link> |
                <Link to="/sample/0/fail">Ejemplo Error: (Con redirect)</Link> |
            </nav>
            <h2 className="cabecera-header">Componente por defecto</h2>
            <p>Este es el componente por defecto de nuesta aplicación.</p>
            </>
        )
    }
}
