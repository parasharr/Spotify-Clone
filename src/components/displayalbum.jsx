import React from 'react'
import Navbar from './navbar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets';

const Displayalbum=()=> {
    
    const {id} = useParams();
    const albumData = albumsData[id];
    
    return (
        <>
            <Navbar/>   
        </>
    )
}

export default Displayalbum
