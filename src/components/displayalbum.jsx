import React, { useContext } from 'react'
import Navbar from './navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Displayalbum=()=> {
    
    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);
    
    return (
        <>
            <Navbar/>   
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4 className='text-[#a7a7a7]'>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-4 mr-1' src={assets.spotify_logo} alt="" />
                        <b className='mr-2 text-[14px]'>Spotify</b>
                        • 1,326,451 likes
                        • <b className='mr-2'>10 Songs,</b>
                        2 hr 30 min
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p className='hidden sm:inline'><b className='mr-4'>#</b>Title</p>
                <p className='hidden sm:inline'>Album</p>
                <p className='hidden sm:block '>Date Added</p>
                <img className='m-auto w-4 hidden sm:block' src={assets.clock_icon} alt="" />
            </div>
            <hr className='border-[#737373]'/>
            {
                songsData.map((item, index)=>(
                    <div onClick={()=> playWithId(item.id)} key={index} className='grid grid-cols-1 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                        <p className='text-white'>
                            <b className='mr-1 text-[#a7a7a7] hidden sm:inline'> {index+1} </b>
                            <img className='inline w-10 mr-1' src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='text-[15px] hidden sm:block'>{item.album}</p>
                        <p className='text-[15px] hidden sm:block'>{item.date}</p>
                        <p className='text-[15px] text-center hidden sm:block'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Displayalbum
