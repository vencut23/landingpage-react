import React from 'react'
import { logos } from '../utilities/Logos'
import { AiFillAlert } from "react-icons/ai";
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";
import { AiFillAliwangwang } from "react-icons/ai";
import HelpingCard from './HelpingCard';
function Helping() {
    const logo = [AiFillAlert, AiFillAlipayCircle, AiFillAmazonCircle, AiFillAliwangwang];
    return (
        <>
            <div className="pl-5 pr-5 pt-16 pb-16 flex flex-col gap-7 sm:grid sm:grid-cols-2 lg:grid-cols-6 justify-center items-center md:gap-10">
                <div className="flex flex-col gap-5 lg:col-start-2 lg:col-end-4">
                    <h1 className='text-3xl'>
                        Helping a local business reinvent itself
                    </h1>
                    <p>
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 grid-rows-2  lg:col-start-4 lg:col-end-7 items-center justify-center md:gap-5">
                    {
                        logo.map((l) => <HelpingCard Logo={l} number={77754332} text={'hello all'} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Helping