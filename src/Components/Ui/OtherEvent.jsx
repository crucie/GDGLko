import React from 'react'
import arw from '../../assets/Arrow.svg'
import grd from '../../assets/Grids.svg'

function OtherEvent( {event} ) {
  return (
    <div className='block max-w-[750px]  h-[250px] mx-4 bg-white border-2 border-gray-300 rounded-2xl flex flex-row relative overflow-hidden'>
        <div className='w-[35%]  bg-[#81F387] rounded-xl m-2 hover:' style={{ backgroundImage: `url(${grd})` }}/>
        <div className='w-[70%] h-[100%] flex flex-col  pt-4 pb-4 '>
            <span className='font-sans text-2xl'>
                {event.date}
            </span>
            <span className='font-sans font-bold text-4xl text-[#343434]'>
                {event.title}
            </span>
            <span>
                {event.description}
            </span>
            <span className='font-bold font-sans text-xl'>
                {`venue: ${event.venue}`}
            </span>
            <div className='flex bottom-0 h-[100%] items-end '>
                <div className='flex flex-row justify-start w-[100%] h-[10%]  bottom-0'>   
                    <button className='flex flex-row items-center left-0'>
                        <img src={arw}  alt="" className='max-w-[26px] block ' />
                        <span className='text-[#2D82F1] font-bold font-sans text-lg '>View Details</span>
                    </button>
                </div>
            </div>
        </div>
        {/* <button 
            className="absolute top-1 right-1 rounded-tr-2xl rounded-bl-3xl w-[18%] h-[18%] border-b-4 border-r-4 active:border-r-0  active:border-b-0 active:border-l-4 active:border-t-4 border-[#414141] bg-[#2D82F1] bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${grd})` }}>
                <span className="relative z-10 font-bold text-2xl" >Register</span>
        </button> */}
    </div>
  )
}

export default OtherEvent
