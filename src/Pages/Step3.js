import React from 'react'
import '../Styles/Step3.css'

const Step3 = () => {

  const checkBoxClicked = (e) => {
    console.log(e.target.id);

    const checkBox = document.getElementById(e.target.id);

  }
  

  return (
    <div className='main-container' id='step3-container'>
      <div className='right-container' id='step3-right-container'>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>

        <div className='add-ons-container'>

            <div className='add-ons'>
              <button className='add-ons-btn' onClick={checkBoxClicked} id="online-service">
                <input type="checkbox" name="online-service" id="online-service" />
                
                <div className='flex-column'>
                  <h2>Online Service</h2>
                  <p>Access to multiplayer games</p>
                </div>

                <span className='add-ons-price'>+$1/mo</span>
              </button>
            </div>

          <div className='add-ons'>
            <button className='add-ons-btn' onClick={checkBoxClicked} id="larger-storage">
              <input type="checkbox" name="larger-storage" id="larger-storage" />

              <div className='flex-column'>
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </div>

              <span className='add-ons-price'>+$2/mo</span>
            </button>
            
          </div>

          <div className='add-ons'>
            <button className='add-ons-btn' onClick={checkBoxClicked} id="customizable-profile">
              <input type="checkbox" name="customizable-profile" id="customizable-profile" />
            
              <div className='flex-column'>
                <h2>Customizable profile</h2>
                <p>Custom theme on your profile</p>
              </div>

              <span className='add-ons-price'>+$2/mo</span>

            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Step3