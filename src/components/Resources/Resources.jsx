import React from 'react'
import { BsDownload } from 'react-icons/bs';
import NDCNotice from '/NDC-Notice.pdf';
import NECOFFICIALS from '/NEC-Officials.pdf';
import CONSTITUTION from '/Constitution.pdf';
import TERMS from '/Terms-Conditions.pdf';
import REGISTRATION from '/Reg-Procedure.pdf';
import BALANCE from '/Financials-tri-balance.pdf';
import IPSAS from '/Annual-IPSAS-Accrual.pdf';
import STATEMENT2023 from '/Stateme2023-24.pdf'; 

const Resources = () => {
  return (
    <div className='resources'>
      <h1>Resources</h1>

      <p>Welcome to the Justice and Freedom Party (JFP) Resources Page, your go-to hub for essential documents, policies, and educational materials. Here, you will find valuable resources that outline our vision, mission, and strategies for a just and free society.</p>
     
      <a href={NDCNotice} target='_blank' download> <button
        type='button'
        className=""
        title="NDCnotice"
      >
        NDC NOTICE <BsDownload />
      </button> </a>

      <a href={NECOFFICIALS} target='_blank' download> <button
        type='button'
        className=""
        title="Nec"
      >
        NEC OFFICIALS <BsDownload />
      </button> </a>
      
     <a href={CONSTITUTION} target='_blank' download> <button
        type='button'
        className=""
        title="Constitution"
      >
        CONSTITUTION <BsDownload />
      </button> </a>

      <a href={TERMS} target='_blank' download> <button
        type='button'
        className=""
        title="CTerms"
      >
        TERMS & CONDITION <BsDownload />
      </button> </a>


      <a href={REGISTRATION} target='_blank' download><button
        type='button'
        className=""
        title="Registration"
      >
        Registration Procedure <BsDownload />
      </button></a>

      <a href={BALANCE} target='_blank' download><button
        type='button'
        className=""
        title="Balance"
      >
        Trial Balance 30th June 2025 <BsDownload />
      </button></a>

      <a href={IPSAS} target='_blank' download><button
        type='button'
        className=""
        title="Ipsas"
      >
        JFP Annual-IPSAS-Accrual <BsDownload />
      </button></a>

      <a href={STATEMENT2023} target='_blank' download><button
        type='button'
        className=""
        title="statement2023"
      >
        Statement 2023-2024 <BsDownload />
      </button></a>
    </div>
  )
}

export default Resources;
