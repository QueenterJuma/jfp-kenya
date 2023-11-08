import React from 'react'
import { FaPrayingHands } from 'react-icons/fa'
import { GiBullseye } from 'react-icons/gi'

const Mission = () => {
  return (
    <div className='objectives'>
      <div className='mission'>
        <h2>Mission</h2>
        <span> <GiBullseye /> </span>
        <p>
          To be a conduit to equip, nature and protect social and democratic society for edifying of the citizen to unity till we be complete and effective globally.
        </p>
      </div>

      <div className='vission'>
        <h2>Vission</h2>
        <span> <FaPrayingHands /> </span>
        <p>
          Restoration of justice in the land to establish a prosperous, industrialized and modern nation, in which all citizens enjoy equal social, economic and democratic rights, and live in unity.
        </p>
      </div>
    </div>
  )
}

export default Mission;
