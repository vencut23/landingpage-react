import React from 'react'

function Caringcard({text}) {
  return (
    <>
      <div className="flex flex-col w-fit gap-3 p-5 rounded shadow-xl border-2 col-span-2 max-w-56">
         <p>{text}</p>
         <h1 className='text-green-300 text-xl'>Read more</h1>
      </div>
    </>
  )
}

export default Caringcard