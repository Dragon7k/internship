
import { useEffect, useState } from 'react';
import FieldsList from '../components/FieldsList';
import FieldService from '../services/FieldService';


function ListPage() {
  const[posts, setPosts] = useState([ ])

  useEffect(()=>{
    fetchPosts()
  },[])
  
  async function fetchPosts(){
    const response = await FieldService.getField();
    setPosts(response.data)
  }
  
  return (
    <div className = "App">
     <FieldsList posts = {posts}/>
    </div>
  );
}

export default ListPage;
