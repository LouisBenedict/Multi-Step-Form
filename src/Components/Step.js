import React from 'react'
import '../Pages/Step1.css'

const Step = ({id, text}) => {
  return (
    <div>
        <div className='cb'>
            <p>STEP {id}</p>
            <h2>{text}</h2>
        </div>
    </div>
  )
}

export default Step