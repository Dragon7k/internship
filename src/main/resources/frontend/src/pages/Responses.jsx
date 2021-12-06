import React from 'react';
import ResponseList from '../components/ResponseList';
import ResponsesService from '../services/ResponsesService';
import { useEffect, useState } from 'react';

function Responses() {
    const[posts, setPosts] = useState([ ])
  
    useEffect(()=>{
      fetchPosts()
    },[])
    
    async function fetchPosts(){
      const response = await ResponsesService.getResponse();
      setPosts(response.data)
    }
    
    return (
      <div className = "App">
       <ResponseList posts = {posts}/>
      </div>
    );
  }


export default Responses;