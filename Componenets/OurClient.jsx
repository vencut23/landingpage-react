import React from 'react'
import { logos } from '../utilities/Logos'
function OurClient() {
    return (
        <>
            <div className="flex flex-col items-center pt-16 pb-16 pl-5 pr-5 text-justify">
                <h1 className="text-xl">Our Client</h1>
                <h3 className=' inline'>We have been working with some Fortune 500+ clients</h3>
                <div className='pt-10 pb-10'>
                    <ul className="flex flex-wrap md:flex-row md:gap-10 gap-3 items-center justify-center">
                        {
                            logos.map((logo, index) => {
                                return (
                                    <li key={index} className='overflow-x-hidden'>
                                        <img className=' size-5 sm:size-16 object-contain' src={logo.src} alt={logo.alt} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default OurClient