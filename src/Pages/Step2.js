import React from 'react'
import arcadeImg from '../Assets/icon-arcade.svg'
import advancedImg from '../Assets/icon-advanced.svg'
import proImg from '../Assets/icon-pro.svg'
import { Switch } from 'antd'
import '../Styles/Step2.css'

const Step2 = () => {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const switchToggled = () => {
    console.log('switch toggled');

    const prices = document.querySelectorAll('.price');
    const twoMonthsFree = document.querySelectorAll('.monthsFree');

    prices.forEach(price => {
      if (price.innerText === '$9/mo') {
        price.innerText = '$99/yr';
      } else if (price.innerText === '$12/mo') {
        price.innerText = '$119/yr';
      } else if (price.innerText === '$15/mo') {
        price.innerText = '$139/yr';
      } else if (price.innerText === '$99/yr') {
        price.innerText = '$9/mo';
      } else if (price.innerText === '$119/yr') {
        price.innerText = '$12/mo';
      } else if (price.innerText === '$139/yr') {
        price.innerText = '$15/mo';
      }
    });

    twoMonthsFree.forEach(monthsFree => {
      if (monthsFree.innerText === '') {
        monthsFree.innerText = '2 months free';
      } else if (monthsFree.innerText === '2 months free') {
        monthsFree.innerText = '';
      }
    });
  }


  const btnOnClick = (e) => {
    e.preventDefault();

    const btn = e.target;
    const btnId = btn.id;
    console.log(btnId);

    const btns = document.querySelectorAll('.plan-btn');
    btns.forEach(btn => {
      btn.classList.remove('active');
    });

    btn.classList.add('active');
  }

  

  return (
    <div className='main-container' id='step2-container'>

      <div className='right-container' id='step2-right-container'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>

        <div className='plan-container'>

            <div className='plan'>
              <button className='plan-btn' onClick={btnOnClick} id="arcade-btn">
                <div className='img-container'>
                  <img src={arcadeImg} alt='Arcade' />
                </div>
            
                <h2>Arcade</h2>
                <span className='price'>$9/mo</span>
                <span className='monthsFree'></span>
              </button>
            </div>

          <div className='plan'>
            <button className='plan-btn' onClick={btnOnClick} id="advanced-btn">
              <div className='img-container'>
                <img src={advancedImg} alt='Advanced' />
              </div>

              <h2>Advanced</h2>
              <span className='price'>$12/mo</span>
              <span className='monthsFree'></span>
            </button>
            
          </div>

          <div className='plan'>
            <button className='plan-btn' onClick={btnOnClick} id="pro-btn">
              <div className='img-container'>
                <img src={proImg} alt='Pro' />
              </div>

              <h2>Pro</h2>
              <span className='price'>$15/mo</span>
              <span className='monthsFree'></span>
            </button>
            
          </div>
        </div>

        <div class="monthly-yearly-switch">
          <Switch onChange={onChange} onClick={switchToggled} id="switch"/>
        </div>

      </div>
      
      
      
    </div>
  )
}

export default Step2