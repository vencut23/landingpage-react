import React from 'react'
import { logos } from '../utilities/Logos'

function Customers() {
    return (
        <>
            <div className="flex gap-10 pt-16 pb-16 pl-5 pr-5 flex-col sm:flex-row md:grid grid-cols-6 justify-center items-center">
                <div className="flex justify-center items center col-start-2 col-end-3">
                    <img className="max-h-32 min-w-40" src={logos[1].src} alt='hello'/>
                </div>
                <div className="flex flex-col gap-2 col-start-3 col-end-6">
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curab
                        itur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h2>Tim Smith</h2>
                    <h3>British Dragon Boat Racing Association</h3>
                    <div className="flex flex-row flex-wrap gap-3 items-center justify-center ">
                        {
                            logos.map((l)=>{
                                return(
                                    <img className="size-10" src={l.src} alt='hello'/>
                                )
                            })
                        }
                        <h1 className='text-green-800 text-xl'>Meet all Custemer {'-->'}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customers