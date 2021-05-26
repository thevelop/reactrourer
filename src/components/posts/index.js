import Axios from 'axios'
import React, {Component, Fragment, useEffect, useState } from 'react'
import DOMPurify from 'dompurify';
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import Article from './article'


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
          const { comdata } = await Axios.get("https://jsonplaceholder.typicode.com/comments");
          //console.log(data)
          //return data;
          this.setState({
            posts: data,
            comments: comdata
          })
         } catch (error) {
          console.log(error);
          
        }
      }

    render(){
      return (
        <>
          <h2>Blog</h2>
          <ul className="lista-articulos">
          {this.state.posts && this.state.posts.length !== 0 ?
                this.state.posts.map(post => 
                <li key={post.id}>
                 <>
                      <article>
                      <img src={`https://picsum.photos/512/290.webp?random=${post.id}`}></img>
                      <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                      <div className="resumen" dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(post.body) } } />
                      <p><Link className="leer-mas link-button" to={`/posts/${post.id}`}>Leer más</Link></p>
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