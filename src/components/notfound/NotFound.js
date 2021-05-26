import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'


export default class NotFound extends Component {
    
    render() {
        const id = this.props.match.params.id;
        const name = this.props.match.params.name;
       
         return (
            <>
                <h2 className="cabecera-header">Error 404 - Página no encontrada</h2>
                 <p>La página a la que intentas acceder no existe.</p>
                <Link className="link-button" to="/">Volver atrás</Link>
           </>
        )
    }
}
