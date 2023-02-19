import React from 'react'
import '../Styles/Step3.css'
import Addons from '../Components/Add-Ons/Addons'


const Step3 = ({switchToggled}) => {

  return (
    <div>
      <Addons switchToggled={switchToggled}/>
    </div>
  )
}

export default Step3