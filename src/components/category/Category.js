import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import '../../App.css'


export default class Category extends Component {
    render() {
        const category = this.props.match.params.category;
        return (
            <>
             <h2 className="cabecera-header">Componente de categoría: {category}</h2>
                    {category !== 'fail' ? (
                        <p>Esta es la página para la categoría: {category}</p>
                                            ) : (
                        <Redirect to={{pathname: '/404', state:{from: this.props.location, sample:666}}}/>
                                            )
                    }
            <Link className="link-button" to="/">Volver atrás</Link>
            <p>
            <Link className="link-button" to="/category/guitarras">Ver categoría guitarras</Link>
            </p>
            </>
        )
    }
}
