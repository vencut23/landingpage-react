import React from 'react'

function DemoPage({onclick}) {
  return (
    <>
       <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="relative flex flex-col bg-white p-8 rounded-lg max-w-screen-lg w-full h-fit overflow-auto m-4">
        <button className="ml-auto sm:absolute top-4 right-4 p-4 rounded bg-red-600/50" onClick={onclick}>
          Close
        </button>
        <h1 className="text-2xl font-bold mb-4">About The Demo Of the Company</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec libero nec orci
          consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis provident autem explicabo! Explicabo quasi facere blanditiis fuga inventore illum id obcaecati, soluta accusantium exercitationem non, natus et nulla est.
        </p>
      </div>
    </div>
    </>
  )
}

export default DemoPage