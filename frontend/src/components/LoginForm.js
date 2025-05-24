// import { Axios } from 'axios';
// import { response } from 'express';
import Axios from "axios";
import './AuthForms.css';


import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


const LoginForm = ({setIsLoggedIn, setUserName}) => {
    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    function changeHandler(event){
        setFormData((prev) => {
            return{
                ...prev, [event.target.name]: event.target.value
            }
        })
    }

    const navigate = useNavigate();

    function loginHandler(event){
        event.preventDefault();
        const { email, password } = formData;
        Axios.post("https://todo-backend-evn3.onrender.com/login", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.success) {
                setIsLoggedIn(true);
                Axios.get("https://todo-backend-evn3.onrender.com/user", {
                    params: { email }
                }).then((response) => {
                    if(response.data.success){
                        setUserName(response.data.name);
                        toast.success("Logged in successfully");
                        navigate('/dashboard', { state: { email: email } });
                    }
                    else{
                        toast.error("could not fetch user details");
                    }
                })
                .catch(err => {
                    console.log(err);
                    toast.error("An error occurred while fetching user details.");
                });
                
            } else {
                toast.error(response.data.message);
            }
        }).catch(err => {
            console.log(err);
            toast.error("An error occurred during login.");
        });
    }

  return (
    <form onSubmit={loginHandler}>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input
                required
                type='email'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email Id'

            />
        </label>

        <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input
                required
                type='password'
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'

            />
        </label>

        <button type="submit">
            <p>Log In</p>
        </button>
    </form>
  )
}

export default LoginForm