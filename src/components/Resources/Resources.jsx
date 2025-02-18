import React from 'react'
import { BsDownload } from 'react-icons/bs';
import CONSTITUTION from '/Constitution.pdf';
import REGISTRATION from '/Reg-Procedure.pdf';

const Resources = () => {
  return (
    <div className='resources'>
      <h1>Resources</h1>

      <p>Welcome to the Justice and Freedom Party (JFP) Resources Page, your go-to hub for essential documents, policies, and educational materials. Here, you will find valuable resources that outline our vision, mission, and strategies for a just and free society.</p>
     <a href={CONSTITUTION} target='_blank' download> <button
        type='button'
        className=""
        title="Constitution"
      >
        Constitution <BsDownload />
      </button> </a>

      <a href={REGISTRATION} target='_blank' download><button
        type='button'
        className=""
        title="Registration"
      >
        Registration Procedure <BsDownload />
      </button></a>
    </div>
  )
}

export default Resources;
