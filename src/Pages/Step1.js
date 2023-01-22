import React, {useState} from 'react'
import './Step1.css';
import Step from '../Components/Step';
import Step2 from '../Pages/Step2';
import Step3 from '../Pages/Step3';
import Step4 from '../Pages/Step4';

const Step1 = () => {

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

    let [page, setPage] = useState(0);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleFormData = (e) => {
        e.preventDefault();
        setFormData({
            name: name,
            email: email,
            phone: phone,
        });
        console.log(formData);
        setPage = (page) => page + 1;
        console.log(page);
    }

    const FormSteps = {
        Step1: {
            id: 1,
            name: 'Personal info',
            sidebarname: 'YOUR INFO',
        },
        Step2: {
            id: 2,
            name: 'Personal info',
            sidebarname: 'SELECT PLAN',
        },
        Step3: {
            id: 3,
            name: 'Personal info',
            sidebarname: 'ADD-ONS',
        },
        Step4: {
            id: 4,
            name: 'Personal info',
            sidebarname: 'SUMMARY',
        },
    };

  return (
    <div>
        <div className='container'>

            <div className='left-container'>
                <div className='steps'>
                    <Step id={1} text={FormSteps.Step1.sidebarname} />
                </div>
                <div className='steps'>
                    <Step id={2} text={FormSteps.Step2.sidebarname} />
                </div>
                <div className='steps'>
                    <Step id={3} text={FormSteps.Step3.sidebarname} />
                </div>
                <div className='steps'>
                    <Step id={4} text={FormSteps.Step4.sidebarname} />
                </div>
            </div>

            <div className='right-container'>
                <form action="#" method='GET' className="form" onSubmit={handleFormData}>
                    <h1>
                        {FormSteps.Step1.name}
                    </h1>
                    <p>
                        Please provide your name, email address, and phone number.
                    </p>

                    <div className="form-control">
                        <label htmlFor="name">
                            Name
                        </label>
                        <br/>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder='John Doe' 
                            required
                            onChange={(e) => {
                                setFormData({...formData, name: e.target.value});
                            }} value={formData.name}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">
                            Email
                        </label>
                        <br/>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder='me@example.com' 
                            required
                            onChange={(e) => {
                                console.log(e);
                                setFormData({...formData, email: e.target.value});
                            }} value={formData.email}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="phone">
                            Phone
                        </label>
                        <br/>
                        <input 
                            type="number" 
                            minLength={6} 
                            id="phone" 
                            placeholder='e.g. +60 11 295291' 
                            required
                            onChange={(e) => {
                                console.log(e);
                                setFormData({...formData, phone: e.target.value});
                            }} value={formData.phone}
                        />
                    </div>

                    <input
                    type="submit" 
                    value="Next Step"
                    className="btn"
                    >
                    </input>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Step1


