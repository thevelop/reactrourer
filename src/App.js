import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Default from './components/default/Default'
import Category from './components/category/Category'
import Sample from './components/sample/Sample'
import NotFound from './components/notfound/NotFound'
import About from './components/about/About'
import Blog from './components/posts/index'
//import Article from './components/posts/[id]'
import Article from './components/posts/article'



export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Helmet>
                <meta charSet="utf-8" />
                <title>Ejemplo de routing con React Router DOM</title>
                <meta name="description" content="Ejemplo de uso de React Router DOM en aplicación con componentes estáticos y conexión a API REST" />
                <link rel="canonical" href="http://ejemploroutin.com" />
                </Helmet>
                <header className="header">
                    <h1 className="cabecera-header">Ejemplo de rutas</h1>
                </header>
                <main className="cuerpo-pagina">
                <Switch>
                    <Route exact path="/" component={Default}/>
                    <Route exact path="/404" component={NotFound}/>
                    <Route exact path="/posts" component={Blog}/>
                    <Route path="/posts/:id" component={Article}/>
                    <Route path="/sample/:id/:name" component={Sample}/>
                    <Route exact path="/acerca" component={About}/>
                    <Route path="/category/:category" component={Category}/>
                    <Route component={NotFound}/>
                </Switch>
                </main>
                <footer className="footer-global">
                    <p>Este es el footer</p>
                </footer>
            </div>
        )
    }
}
