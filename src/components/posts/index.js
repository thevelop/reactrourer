import Axios from 'axios'
import React, {Component, Fragment, useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'
import DOMPurify from 'dompurify';
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';
//import Article from './article'
// Importar quicklink para "precargar páginas y mejorar la velocidad de carga"
import { Quicklink } from "react-quicklink";


class Blog extends Component {

    constructor(props){
      super(props);
      this.state = {
        posts: [],
        comments: []
      }
    }   
    async componentDidMount(){
        try {
          const { data } = await Axios.get("https://jsonplaceholder.typicode.com/posts");
          //const { comdata } = await Axios.get("https://jsonplaceholder.typicode.com/comments");
          //console.log(data)
          //return data;
          this.setState({
            posts: data,
           // comments: comdata
          })
         } catch (error) {
          console.log(error);
          
        }
      }

    render(){
      return (
        <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Blog desde API REST - Ejemplo de routing con React Router DOM</title>
                <meta name="description" content="BLOG - Ejemplo de uso de React Router DOM en aplicación con componentes estáticos y conexión a API REST" />
                <link rel="canonical" href="http://ejemplorouting.com/posts" />
          </Helmet>
          <h2>Blog</h2>
          <ul className="lista-articulos">
          {this.state.posts && this.state.posts.length !== 0 ?
                this.state.posts.map(post => 
                <li key={post.id}>
                 <>
                      <article>
                      <img loading="lazy" alt={post.title} src={`https://picsum.photos/512/290.webp?random=${post.id}`}></img>
                      <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                      <div className="resumen" dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(post.body) } } />
                      {/*<p><Link className="leer-mas link-button" to={`/posts/${post.id}`}>Leer más</Link></p>*}
                      {/* Este enlace precarga la siguiente página, lo que hace que la carga sea más rápida */}
                      <p><Quicklink className="link-button" to={`/posts/${post.id}`} alt={post.title} title={post.title}>Enlace rápido</Quicklink></p>
                      </article>
                 </>
                </li>) :
                "cargando"}
          </ul>
          </>
         );
      }
  }

  export default Blog;