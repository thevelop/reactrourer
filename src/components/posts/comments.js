import Axios from 'axios'
import React, {Component, Fragment, useEffect, useState } from 'react'
import DOMPurify from 'dompurify';


class Comments extends Component {

    constructor(props){
      super(props);
      this.state = {
        comments: []
      }
    }   
    async componentDidMount(){
        try {
          const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/comments`);
          console.log(data)
          //return data;
          this.setState({
            comments: data,
          })
         } catch (error) {
          console.log(error);
          
        }
      }

    render(){
      return (
     <> 
     
     <ul>
          {this.state.comments && this.state.comments.length !== 0 ?
                this.state.comments.map(comment => 
                <li key={comment.id}>
                 <>
                      <div>
                      <p><strong>{comment.name}</strong></p>
                      <div dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(comment.body) } } />
                      </div>
                 </>
                </li>) :
                "cargando"}
          </ul>
      </>)
  }
}

  export default Comments;