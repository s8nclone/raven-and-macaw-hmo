import React from 'react';
import { useState } from 'react';
import './contact.scss';
import logo from './logo.png';
    

const Contact = () => {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
    }

    return (
        <div className="contact rounded-t-xl bg-orange-200 p-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 space-x-4" >
                <div className="contact-container p-2">
                    <div className="flex items-center">
                        <img className="rounded-r-lg w-10 h-10" alt="company logo" src={logo} />
                        <h1 className="text-xl font-extrabold">Raven&Macaw<span className="text-orange-600">HMO</span></h1>
                    </div>
                    <div className="text-left pt-2">
                        <h2>Contact Us</h2>
                        <div>
                            <h3>Address:</h3>
                            <p className="text-sm font-medium">Abuja - 21 Abeokuta Street, Area 8, Garki, FCT, Nigeria</p>
                        </div>
                        <h3>Tel:<a href="tel:+2248096661116">+234 809 666 1116</a></h3>
                        <div className="pt-2">
                            <h3>Follow us on social media</h3>
                            <ul>
                                <li>Twitter:<a href="?">@RavenMacawHMO</a></li>
                                <li>Facebook:<a href="?">RavenMacawHMO</a></li>
                                <li>LinkedIn:<a href="?">RavenMacawHMO</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="plan-container flex lg:col-span-2 p-2 justify-around ">
                    <div>
                        <h2>Company</h2>
                        <ul className="text-left">
                            <li><a href="?" >About</a></li>
                            <li><a href="?">Team</a></li>
                            <li><a href="?">Board</a></li>
                            <li><a href="?">Blog</a></li>
                            <li><a href="?">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Health Plans</h2>
                        <ul className="text-left">
                            <li><a href="?">Just YOU</a></li>
                            <li><a href="?">Me & my family</a></li>
                            <li><a href="?">Workers health</a></li>
                            <li><a href="?">Large family</a></li>
                            <li><a href="?">Old but young</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Resources</h2>
                        <ul className="text-left">
                            <li><a href="?">Available hospitals</a></li>
                            <li><a href="?">Benefit list</a></li>
                            <li><a href="?">Download Health App</a></li>
                            <li><a href="?">Terms of use</a></li>
                            <li><a href="?">FAQs</a></li>
                            <li><a href="?">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="form-div">
                <form onSubmit={handleSubmit}>
                    <h2>Subscribe to our newsletter</h2>
                    <div className="">
                        <input 
                        type="text" 
                        name="username" 
                        value={inputs.username || ""} 
                        placeholder="Name"
                        onChange={handleChange}
                        className="form-input"
                    />
                    </div>
                    <div className="label">
                        <input
                        type="email" 
                        name="email" 
                        placeholder="you@email.com"
                        value={inputs.email || ""} 
                        onChange={handleChange}
                        className="form-input"
                    />
                    </div>
                    
                    <input type="button" />
                </form>
            </div>
        </div>
    );
}

export default Contact;