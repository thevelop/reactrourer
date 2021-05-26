import Axios from 'axios'
import React, {Component, Fragment, useEffect, useState } from 'react'
import DOMPurify from 'dompurify';
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';


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
          console.log(error.response.data);
          console.log(error.response.comdata);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }

    render(){
      return (
      <div className="flex flex-col items-center justify-center min-h-screen">
         <main className="flex flex-col items-center flex-1 px-20 py-10">
          <h1 className="text-6xl font-bold mt-5 mb-5">Blog</h1>
          <p className="text-xl mb-5">Using Json placeholder typicode api</p>
          <ul>
          {this.state.posts && this.state.posts.length !== 0 ?
                this.state.posts.map(post => 
                <li key={post.id}>
                 <>
                      <article>
                      <h2><Link title={post.title.rendered} to={`/posts/${post.id}`}>{post.title}</Link></h2>
                      <div dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(post.body) } } />
                      </article>
                 </>
                </li>) :
                "cargando"}
          </ul>
          <ul>
          {this.state.comments && this.state.comments.length !== 0 ?
                this.state.comments.map(comment => 
                <li key={comment.id}>
                 <>
                      <article>
                      <h2><a title={comment.name} href={`https://jsonplaceholder.typicode.com/comments/id/`.comment.id}>{comment.name}</a></h2>
                      <div dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(comment.body )} } />
                      </article>
                 </>
                </li>) :
                "cargando"}
          </ul>
        </main>
       </div>
      );
      }
  }

  export default Blog;