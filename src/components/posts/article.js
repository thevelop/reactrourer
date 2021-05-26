import Axios from 'axios'
import React, {Component, Fragment, useEffect, useState } from 'react'
import DOMPurify from 'dompurify';
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import Comments from './comments'


class Article extends Component {

    constructor(props){
      super(props);
      this.state = {
        post: [],
        comments: []
      }
    }   
    async componentDidMount(){
        try {
          const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`);
          console.log(data)
          //return data;
          this.setState({
            post: data,
          })
         } catch (error) {
          console.log(error);
          
        }
      }

    render(){
      return (
     <> 
     
                      <article>
                      <img className="hero-image" alt={this.state.post.title} src={`https://picsum.photos/1200/678.webp?random=${this.props.match.params.id}`}></img>
                      <h2 className="post-title">{this.state.post.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(this.state.post.body) } } />
                      </article>
                      <div>
                          <h3>Comentarios</h3>
                      <Comments id={this.props.match.params.id}/>
                      </div>
                      <p><Link className="link-button" to="/posts">Volver atrás</Link></p>
                      <p><Link className="link-button" to="/">Inicio</Link></p>
                      
      </>)
  }
}

  export default Article;