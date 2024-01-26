import React from 'react'
import Card from './Card'
import "./App.css"
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";




function App() {
  return (

    <div className="app">
      <Card>
       <h4>FREE</h4>
      <h1>$0/month</h1>
      <hr />
      <ul>
        <li><FaCheck /> single users</li>
        <li><FaCheck /> 50GB storage</li>
        <li><FaCheck /> Unlimited public projects</li>
        <li><FaCheck /> Community Access</li>
        <div className='fade'>
        <li><FaTimes /> Unlimited private projects</li>
        <li><FaTimes /> Dedicated phone support</li>
        <li><FaTimes /> Free subdomain</li>
        <li><FaTimes /> Monthly status Report</li>
        </div>
      </ul>
      <button>BUTTON</button>

      </Card>
      <Card>
      <h4>PLUS</h4>
       <h1>$9/month</h1>
       <hr />
       <ul>
        <li> <FaCheck /> 5 users</li>
        <li> <FaCheck /> 50GB storage</li>
        <li><FaCheck /> Unlimited public projects</li>
        <li> <FaCheck /> Community Access</li>
        <li><FaCheck /> Unlimited private projects</li>
        <li><FaCheck /> Dedicated phone support</li>
        <li><FaCheck /> Free subdomain</li>
        <div className='fade'>
        <li><FaTimes />Monthly status Report</li>
        </div>
      </ul>
      <button>BUTTON</button>
      </Card>
      <Card>
      <h4>PRO</h4>
      <h1>$49/month</h1>
      <hr />
      <ul>
        <li><FaCheck /> Unlimited users</li>
        <li><FaCheck /> 50GB storage</li>
        <li><FaCheck /> Unlimited public projects</li>
        <li><FaCheck /> Community Access</li>
        <li><FaCheck /> Unlimited private projects</li>
        <li><FaCheck /> Dedicated phone support</li>
        <li><FaCheck /> Free subdomain</li>
        <li><FaCheck /> Monthly status Report</li>
      </ul>
      <button className='button1'> BUTTON</button>

      </Card>
      
    
  
  </div>

  )
}

export default App


