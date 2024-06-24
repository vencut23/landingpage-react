import React from 'react'
import Managecard from './Managecard'
import { logos } from '../utilities/Logos'

function ManageCom() {
  return (
    <>
       <div className="flex flex-col gap-3 items-center pl-16 pr-16 pb-5">
          <h1 className='text-3xl text-center'>Manage your entire community in a single system</h1>
          <p>Who is Nextcent suitable for?</p>
          <div className="flex flex-col md:flex-row gap-5 pt-5">
              <Managecard img={logos[0].src} text={"Membership Organisations"} para={"Our membership management software provides full automation of membership renewals and payments"}></Managecard>
              <Managecard img={logos[0].src} text={"Membership Organisations"} para={"Our membership management software provides full automation of membership renewals and payments"}></Managecard>
              <Managecard img={logos[0].src} text={"Membership Organisations"} para={"Our membership management software provides full automation of membership renewals and payments"}></Managecard>
          </div>
       </div>
    </>
  )
}

export default ManageCom