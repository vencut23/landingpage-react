import React from 'react'
import Caringcard from './Caringcard'

function Caring() {
    return (
        <>
            <div className="pl-5 pr-5 pt-16 pb-16 flex flex-col gap-5 justify-center items-center">
                <h1 className="text-3xl text-green-300 text-center">
                    Caring is the new marketing
                </h1>
                <p className='max-w-screen-md'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                <div className="flex flex-row flex-wrap gap-5 md:gap-8 md:grid grid-cols-6 justify-center items-center">
                    <Caringcard text="Creating Streamlined Safeguarding Processes with OneRen" />
                    <Caringcard text="Creating Streamlined Safeguarding Processes with OneRen" />
                    <Caringcard text="Creating Streamlined Safeguarding Processes with OneRen" />
                </div>
            </div>
        </>
    )
}

export default Caring