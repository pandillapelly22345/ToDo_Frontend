import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import './Template.css';
import { useNavigate } from 'react-router-dom';


const Template = ({title, desc1, desc2, formtype, setIsLoggedIn, setUserName}) => {
  const navigate = useNavigate();
  return (
    <div className="template-container">
        <div className="template-box">
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
            (<LoginForm setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>)}

            <div className="or-separator">
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            
            <button onClick={() => navigate('/')}>
                <p>Already have an account?</p>
            </button>

        </div>
    </div>
  )
}

export default Template