import Axios from 'axios'
import React, {Component, Fragment, useEffect, useState } from 'react'
import DOMPurify from 'dompurify';
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';


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
                      <h2>{this.state.post.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(this.state.post.body) } } />
                      <p><Link className="link-button" to="/posts">Volver atrás</Link></p>
                      <p><Link className="link-button" to="/">Inicio</Link></p>
                      </article>
                
      
      
      </>)
  }
}

  export default Article;