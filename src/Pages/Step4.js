import React from 'react'
import '../Styles/Step4.css'

const Step4 = () => {
  return (
    <div className='main-container' id='step4-container'>
      <div className='right-container' id='step4-right-container'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div className='cart-container'>
          <div className='cart-header'>

            <div className='cart-plan'>
              <h3>Arcade (Monthly)</h3>
              <a href='#'>Change</a>
            </div>

            <div className='cart-plan-price'>
              {/* Make this dynamic */}
              <h3>$9/mo</h3>
            </div>
          </div>

          <div className='cart-body'>
            <div className='cart-add-ons'>
              <h3>Online service</h3>
              <h3>Larger Storage</h3>
            </div>

            <div className='cart-add-ons-price'>
              <h3>+$1/mo</h3>
              <h3>+$2/mo</h3>
            </div>
          </div>

          <div className='cart-footer'>
            <div className='cart-total'>
              <h3>Total (per month)</h3>
            </div>

            <div className='cart-total-price'>
              <h3>$12/mo</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Step4