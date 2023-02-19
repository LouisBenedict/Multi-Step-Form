import React, { useState } from 'react'

const Form = () => {

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
    }

  return (
    <div className='container'>

        <div className='right-container'>
            <form method='GET' className="form" onSubmit={handleFormData}>
                    <h1>
                        Personal information
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
                            placeholder='Louis Loh' 
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
                            placeholder='louis@example.com' 
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
                            placeholder='011-295291' 
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
                    // onClick={nextStep}
                    >
                    </input>
            </form>         
        </div>
    </div>
  )
}

export default Form