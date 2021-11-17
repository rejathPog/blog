import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import SinglePost from '../../Components/Singlepost/Singlepost'
import './Singlepage.css'

export default function Singlepage() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
