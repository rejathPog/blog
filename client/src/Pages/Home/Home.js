import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Posts from '../../Components/Posts/Posts'
import './Home.css'
const axios = require('axios');

// axios.default.baseURL = "http:/localhost/5000/api"

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts");
            console.log(res);
            setPosts(res.data)
        }
        fetchPosts();
    },[])
    return (
        <>
            <Header />
            <div className="home">
            <Posts posts={posts}/>   
            <Sidebar />    
            </div>
        </>
    )
}
