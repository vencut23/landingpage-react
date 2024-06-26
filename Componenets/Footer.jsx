import React from 'react'
import { logos } from '../utilities/Logos'
import { FaInstagram } from "react-icons/fa";
import { BiSolidWebcam } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="flex flex-col md:grid grid-cols-12 gap-3 justify-center items-center pb-16 pl-5 pr-5 pt-16 bg-slate-400">
                <div className="flex flex-col gap-5 jusity-center col-start-2 col-end-5">
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <img src={logos[0].src} alt="hello" className="size-10" />
                        <h1>Nexcent</h1>
                    </div>
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <FaInstagram className='size-10 bg-slate-500/50 rounded-xl p-2'/>
                        <BiSolidWebcam className='size-10 bg-slate-500/50 rounded-xl p-2'/>
                        <FaTwitterSquare className='size-10 bg-slate-500/50 rounded-xl p-2'/>
                        <FaYoutube className='size-10 bg-slate-500/50 rounded-xl p-2'/>
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-center col-start-6 col-end-7">
                    <h1>Company</h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3 items-center col-start-8 col-end-9">
                    <h1>Support</h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5 justify-center col-start-10 col-end-12">
                    <h1>Stay Up to date</h1>
                    <input type='text' className='min-w-56 min-h-7 rounded shadow-lg   bg-gray-700/50 focus:outline-none border-black border-px p-2'/>
                </div>
            </div>
        </>
    )
}

export default Footer