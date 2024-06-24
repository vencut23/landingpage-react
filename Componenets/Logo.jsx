import React from 'react'
import { logos } from '../utilities/Logos'

function Logo() {
  return (
    <>
      <div className='pt-3'>
        <ul  className="flex flex-row flex-wrap md:gap-14 gap-5 items-center justify-center">
            {
                logos.map((logo,i)=>{
                    return(
                        <li className=" size-16"key={i}>
                            <img src={logo.src} alt={logo.alt}/>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </>
  )
}

export default Logo