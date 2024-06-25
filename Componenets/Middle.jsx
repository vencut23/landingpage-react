import React from 'react'
import { logos } from '../utilities/Logos'
function Middle() {
    return (
        <>
            <div className=" flex flex-col items-center justify-center gap-5 pl-5 pr-5 pb-20 pt-5 sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-16 ">
                <div className="flex justify-center items-center sm:col-span-1 lg:col-start-2 lg:col-end-3">
                    <img className="max-w-52 max-h-52 min-h-40 min-w-40" src={logos[0].src} alt='hello'/>
                </div>
                <div className="flex flex-col gap-4 sm:col-span-1 lg:col-start-3 lg:col-end-5">
                    <h1 className='text-2xl'>The unseen of spending three years at Pixelgrade</h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                        Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button className="rounded p-4 bg-slate-500 max-w-40">
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}

export default Middle