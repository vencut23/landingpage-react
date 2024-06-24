import React from 'react'
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { useState } from 'react';
function Navbar() {
    const comp = ['Home', 'About', 'Contact', 'Sign in'];
    const [menu, setmenu] = useState(false);
    return (
        <>
            <div className='sticky top-0 w-screen flex flex-row justify-between items-center p-4 border-2 border-b border-slate-300/50 bg-gradient-to-r from-blue-400 to-blue-800'>
                <div className="flex flex-column gap-4">
                    <BsFillMenuButtonFill />
                    <h3>hello</h3>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex flex-row gap-4'>
                        {
                            comp.map((comp, index) => {
                                return (
                                    <li key={index} className='rounded  border-slate-300 border-2 p-1 pl-2 pr-2  bg-slate-100'>
                                        <a src="#">{comp}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='block md:hidden'>
                    <button onClick={() => setmenu(!menu)}>
                        {
                            menu ? <MdMenuOpen /> : <IoMenu></IoMenu>
                        }
                    </button>
                </div>
            </div>
            {
                menu ?
                    <div className='md:hidden block p-4 bg-slate-600'>
                        {
                            <ul className='flex flex-col justify-center items-center gap-4 '>
                                {
                                    comp.map((comp, index) => {
                                        return (
                                            <li key={index} className='border-b p-0 border-slate-200 w-full text-center'>
                                                <a src='#'>{comp}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div> : ' '
            }
        </>
    )
}

export default Navbar