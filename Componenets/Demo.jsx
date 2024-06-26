import React, { useState } from 'react'
import DemoPage from './DemoPage';

function Demo() {
  const [demopageOpen, SetdemoOpen] = useState(false);
  function onOpen() {
    SetdemoOpen(true);
  }
  function onClose() {
    SetdemoOpen(false);
  }
  return (
    <>
      <div className="pt-16 pb-16 pl-5 pr-5 text-center flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="rounded shadow-lg p-3 bg-green-300" onClick={onOpen}>
          Get Demo
        </button>
      </div>
      {demopageOpen ?
        <DemoPage onclick={onClose} />
        : ' '}
    </>
  )
}

export default Demo