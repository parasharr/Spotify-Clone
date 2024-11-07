import React from 'react'
import Navbar from './navbar'
import { albumsData } from '../assets/assets'
import Albumitem from './albumitem'

const Displayhome= () => {
    return (
        <>
         <Navbar/>   
         <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Albums</h1>
            <div className='flex overflow-auto'>
            {albumsData.map((item, index)=>(
                <Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
            ))}
            </div>
         </div>
        </>
    )
}

export default Displayhome
