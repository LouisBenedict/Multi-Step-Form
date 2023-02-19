import React, {useState} from 'react'
import Step1 from '../Pages/Step1';
import Step2 from '../Pages/Step2';
import Step3 from '../Pages/Step3';
import Step4 from '../Pages/Step4';
import Information from '../Data/Information';
import { Steps } from 'antd';
import '../Styles/Conditional.css'

const Conditional = ({switchToggled}) => {

  



  const [total, setTotal] = useState(0);

  const [summary, setSummary] = useState({
    plan: '',
    price: 0,
    addons: {
      online: false,
      storage: false
    },
    total: 0
  });


  


    let [current, setCurrent] = useState(0);

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    }

    // Testing if Conditional Rendering Works
    // page = 1;

    const conditionalComponent = (current) => {
        if(current === 0) {
            return <Step1 />;
        } else if(current === 1) {
            return <Step2 />;
        } else if(current === 2) {
            return <Step3 />;
        } else if(current === 3) {
            return <Step4 />;
        } else {
            console.log('Error: Page not found');
        }
    }

    const receiveData = (stepNumber) => {

        const currentStepNumber = Information[stepNumber];
        const sidebarname = currentStepNumber.sidebarname;

        return sidebarname;
    }

    
  return (
    <div className='main-container'>
        
        <div className='left-container'>
            <div className='steps-container'>
                <Steps
                    className='steps'
                    current={current}
                    onChange={onChange}
                    direction="vertical"
                    items={[
                    {
                        title: 'Step 1',
                        description: receiveData('Step1'),
                    },
                    {
                        title: 'Step 2',
                        description: receiveData('Step2'),
                    },
                    {
                        title: 'Step 3',
                        description : receiveData('Step3'),
                    },
                    {
                        title: 'Step 4',
                        description : receiveData('Step4'),
                    },
                    ]}
                />
            </div>
        </div>

        <div className='right-container'>
            {conditionalComponent(current)} 
        </div>

    </div>
  )
}

export default Conditional