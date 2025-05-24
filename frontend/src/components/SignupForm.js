import Axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './AuthForms.css';

const SignupForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        name:"", email:"", password:""
    });

    function changeHandler(event){
        setFormData((prev) => {
            return{
                ...prev, [event.target.name]: event.target.value
            }
        })
    }

    // function signupHandler(event){
    //     event.preventDefault();
    //     const{name, email, password} = formData;
    //     Axios.post("http://localhost:4001/login", {
    //         name: name,
    //         email: email,
    //         password: password
    //     }).then((response) => {
    //         if(response.data.message){
    //             console.log(response.data.message);
    //         }
    //         else{
    //             // setIsLoggedIn = true;
    //             toast.success("Registered Successfully!");
    //             navigate('/');
    //         }
    //     })
    // }

    const navigates = useNavigate();
    function signupHandler(event){
        
        const {name, email, password} = formData;
        event.preventDefault();
        Axios.post("https://todo-backend-evn3.onrender.com/register", {
            name: name,
            email: email,
            password: password
        }).then((res) => {
            if(res.data.success){
                toast.success(res.data.message);
                navigates ('/');
            }
            else{
                toast.error(res.data.message)
            }
        }).catch(err => {
            console.log(err);
            toast.error("An error occurred during login.");
        });
    }

  return (
    <form onSubmit={signupHandler}>
        <label>
            <p>
                First Name <sup>*</sup>
            </p>
            <input
                required
                type='text'
                name='name'
                value={formData.name}
                onChange={changeHandler}
                placeholder='Enter Name'
            />
        </label>

        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input
                required
                type='email'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email address'
            />
        </label>

        <label>
            <p>
                Create Password <sup>*</sup>
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

        <button type='submit'>
            <p>Sign Up</p>
        </button>
    </form>
  )
}

export default SignupForm