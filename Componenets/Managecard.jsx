import React from 'react'

function Managecard({img,text,para}) {
  return (
    <div className="flex flex-col gap-3 max-w-xs min-w-28  items-center justify-center text-center border rounded-md p-5 shadow-lg">
        <img className='size-16' src={img} alt="hello" ></img>
        <p>{text}</p>
        <p>{para}</p>
    </div>
  )
}

export default Managecard