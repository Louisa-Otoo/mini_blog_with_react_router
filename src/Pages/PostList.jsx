import React from 'react'
import Post from './Post'
import PostStyles from '../components/css/Posts.module.css'
import { Outlet, useLoaderData } from 'react-router-dom'



export const PostList = () => {
    const posts = useLoaderData()    
    
  return (
    <>

    <div className={PostStyles.postBody} >
      {
        posts.length > 0?
        (
          posts.map((post) => (
            <Post key={post.id} new={post}/>
            ))
        )
        : <p className={PostStyles.emptyPost}>Please add a new post</p>
      }
    </div> 

    <Outlet /> 
 
    </>
  )
}


// create fxn for fetching data and then pass it as a loader
export const postsLoader = async() => {
  const API_URL = process.env.REACT_APP_API_URL;
    const data = await fetch(API_URL)
    return data.json()
}  


// Execute the loader
// create the function
//pass it to the loader key
//caa the data returned the loader using the useLoader() coming from react-router-dom