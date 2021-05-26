import Axios from 'axios'
import React, { Fragment } from 'react'

export async function getServerSideProps(context) {
 
    const url = 'https://jsonplaceholder.typicode.com/';
    
    const id = context.query.id;  

    const posts = await Axios.get(url + `posts/${ id }`);
 
    const post = posts.data.length > 0 ? posts.data[0] : null;

    let output = {
        props: { 
           post : post
        } 
    }

    if(!post){
        context.res.statusCode = 404;
        return output;
    } 
  
    return output;
}

const Article = ({ ...props }) => {    
    console.table(props)
    return (
        <Fragment>
            <div id="wrapper">
                <div id="main">
                        {props.post === null ? (
                            <h1>Not found</h1>
                            ) : (
                            <Fragment>
                                <h1>{props.match.title}</h1>
                                <article dangerouslySetInnerHTML={ { __html : props.match.body } } />
                            </Fragment>
                        )}      
                  </div>
              </div> 
        </Fragment>
    )
}

export default Article;