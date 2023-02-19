import React, {useState} from 'react'

const Addons = () => {

  const [addons, setAddons] = useState({
    online: false,
    storage: false
  });

  const handleAddons = (e) => {
    setAddons({
      online: e.target.id === 'online' ? true : false,
      storage: e.target.id === 'storage' ? true : false
    });
  }

  const checkBoxClicked = (e) => {
    console.log(e.target.id);

    const OnlineCheckBox = document.getElementById('online-service');
    const LargerStorageCheckBox = document.getElementById('larger-storage');
    const CustomizableProfileCheckBox = document.getElementById('customizable-profile');

    if(e.target.id === 'online-service') {
      OnlineCheckBox.classList.toggle('active');
    } else if (e.target.id === 'larger-storage') {
      LargerStorageCheckBox.classList.toggle('active');
    } else if (e.target.id === 'customizable-profile') {
      CustomizableProfileCheckBox.classList.toggle('active');
    }
    
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

export default Addons