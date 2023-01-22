import React, {useState} from 'react'
import App from '../App';
import Step1 from '../Pages/Step1';
import Step2 from '../Pages/Step2';
import Step3 from '../Pages/Step3';
import Step4 from '../Pages/Step4';

const Conditional = () => {

    let [page, setPage] = useState(0);

    // Testing if Conditional Rendering Works
    // page = 1;

    const conditionalComponent = (page) => {
        if(page == 0) {
            return <Step1 />;
        } else if(page == 1) {
            return <Step2 />;
        } else if(page == 2) {
            return <Step3 />;
        } else if(page == 3) {
            return <Step4 />;
        } else {
            console.log('Error: Page not found');
        }
    }

  return (
    <div>
        {conditionalComponent(page)}
    </div>
  )
}

export default Conditional