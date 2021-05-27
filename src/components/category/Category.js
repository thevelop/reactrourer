import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import '../../App.css'


export default class Category extends Component {
    render() {
        const category = this.props.match.params.category;
        return (
            <>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>{category.toUpperCase()} - Ejemplo de routing</title>
                    <meta name="description" content={`Página para publicaciones de la categoría: ${category}`} />
                    <link rel="canonical" href={`http://ejemplorouting.com/category/${category}`} />
            </Helmet>
             <h2 className="cabecera-header">Componente de categoría: {category.toUpperCase()}</h2>
                    {category !== 'fail' ? (
                        <p>Esta es la página para la categoría: {category.toUpperCase()}</p>
                                            ) : (
                        <Redirect to={{pathname: '/404', state:{from: this.props.location, sample:666}}}/>
                                            )
                    }
            <p>
            <Link className="link-button" to="/category/guitarras">Ver categoría guitarras</Link>
            </p>
            <p>
            <Link className="link-button" to="/category/trompetas">Ver categoría tompretas</Link>
            </p>
            <p>
            <Link className="link-button" to="/category/pianos">Ver categoría pianos</Link>
            </p>
            <p>
            <Link className="link-button" to="/category/saxos">Ver categoría saxos</Link>
            </p>
            <p>
            <Link className="link-button" to="/category/trombones">Ver categoría trombones</Link>
            </p>
            <p>
            <Link className="link-button" to="/category/djembees">Ver categoría djembees</Link>
            </p>
            <p>
            <Link className="link-button" to="/category/flautas">Ver categoría flautas</Link>
            </p>
            <Link className="link-button" to="/">Volver atrás</Link>
            
            </>
        )
    }
}
