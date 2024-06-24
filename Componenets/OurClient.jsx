import React from 'react'
import { logos } from '../utilities/Logos'
import Logo from './Logo'
function OurClient() {
    return (
        <>
           <div className="w-full pr-5 pl-5 pt-16 pb-16">
             <div className="flex flex-col gap-3 ">
                 <h1 className="text-xl text-center">Our Client</h1>
                 <h3 className='text-center'>We have been working with some Fortune 500+ clients</h3>
                 <Logo></Logo>
             </div>
           </div>
        </>
    )
}

export default OurClient