import './App.css';
import React, {useState} from 'react';
import Step1 from './Pages/Step1';
import Step2 from './Pages/Step2';
import Step3 from './Pages/Step3';
import Step4 from './Pages/Step4';

function App() {

  let [page, setPage] = useState(0);

  const pagenum = () => {
    console.log(`Page Number: ${page}`);
  }

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
    <div className="App">

      {/* <ConditionalPage /> */}
      {conditionalComponent(page)}
      {pagenum()}

    </div>
  );
}

export default App;
