import React from 'react'

function HelpingCard({Logo,number,text}) {
  return (
     <div className=" max-w-fit p-2 flex flex-row justify-center items-center gap-3 rounded shadow-lg  border-slate-600 min-w-fit ">
        <Logo className="size-10 min-h-10 min-w-10"/>
        <div className="flex flex-col gap-2 justify-center align-center">
            <h2 className='text-3xl'>{number}</h2>
            <h3>{text}</h3>
        </div>
     </div>
  )
}

export default HelpingCard