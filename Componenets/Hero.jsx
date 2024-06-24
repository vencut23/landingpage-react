import React from 'react'

function Hero() {
   return (
      <>
         <div className="flex flex-col items-center gap-16 sm:flex-row pl-6 pt-32 pb-32 pr-6 justify-around bg-gradient-to-r from-neutral-600 to-neutral-900">
            <div className='flex flex-col gap-4'>
               <h1 className=' text-3xl'>
                  Lessons and insights
                  <br />
                  <span className='text-blue-600 text-4xl'>from 8 years</span>
               </h1>
               <p>Where to grow your business as a photographer:<br/>
               <span className='text-xl text-blue-600'> site or social media?</span></p>
               <button className=' bg-blue-800 text-white border rounded p-2'>Register now</button>
            </div>
            <img className=' size-40 md:size-80' src='https://media.istockphoto.com/id/2013971698/photo/it-programmer-using-computer.jpg?s=1024x1024&w=is&k=20&c=Xzlg_UrxW5zGNBfu4KHvsFwanVuDxy91300bhH5nybs=' alt='hello'></img>
         </div>
      </>
   )
}

export default Hero