import React from 'react'
import arcadeImg from '../Assets/icon-arcade.svg'
import advancedImg from '../Assets/icon-advanced.svg'
import proImg from '../Assets/icon-pro.svg'
import '../Styles/Step2.css'

const Step2 = () => {
  return (
    <div className='main-container'>

      <div className='right-container'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>

        <div className='plan-container'>

          <div className='plan'>

            <div className='img-container'>
              <img src={arcadeImg} alt='Arcade' />
            </div>

            <h2>Arcade</h2>
            <span>$9/mo</span>
          </div>

          <div className='plan'>
            <div className='img-container'>
              <img src={advancedImg} alt='Advanced' />
            </div>

            <h2>Advanced</h2>
            <span>$12/mo</span>
          </div>

          <div className='plan'>
            <div className='img-container'>
              <img src={proImg} alt='Pro' />
            </div>

            <h2>Pro</h2>
            <span>$15/mo</span>
          </div>
        </div>

        <div className='monthly-yearly-switch-container'>

        </div>

      </div>
      
      <input
      type="submit" 
      value="Next Step"
      className="btn"
      >
      </input>
      
    </div>
  )
}

export default Step2