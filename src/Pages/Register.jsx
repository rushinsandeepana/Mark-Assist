import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import Logo from '../photos/loginLogo.png'
import InputField from '../Components/InputField';
import SubmitButton from '../Components/SubmitButton';
import axios from 'axios';
function Register(){

    const handleClick=()=>{
        alert("clicked");
    }

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [firstName,setFirstName] =useState("");
    const [lastName,setLastName] =useState("");
    const [confirmPassword,setConfirmPassword] =useState("");
    const [userType,setUserType] =useState("");
    
    const handleFirstNameChange=(value)=>{
        setFirstName(value);
    }

    const handleLastNameChange=(value)=>{
        setLastName(value);
    }

    const handleEmailChange=(value)=>{
        setEmail(value);
    }

    const handleUserTypeChange=(event)=>{
        setUserType(event.target.value);
        console.log(event.target.value);
    }

    const handlePasswordChange=(value)=>{
        setPassword(value);
    }

    const handleConfirmPasswordChange=(value)=>{    
        setConfirmPassword(value);
    }


    const handleSubmit = async (event)=>{
        event.preventDefault();
        const formData={
            firstName: firstName,
            lastName: lastName,
            email: email,
            userType: userType,
            password: password,
            confirmPassword: confirmPassword

        }

        try{
            const response = await axios.post('http://localhost:5000/api/users',formData);
            console.log(response.data); 
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className=" flex justify-center items-center h-full">
            <div className="flex flex-col items-center rounded rounded-sm shadow shadow-gray-400 w-96 h-fit py-5 px-10">
                <div className="w-5/12 mb-10 mt-10"><img src={Logo} alt="Logo"/></div>
                <div className="flex items-center  rounded rounded-sm w-3/4 shadow shadow-gray-300">
                    <button className="flex items-center justify-center p-1" onClick={handleClick}><FcGoogle className=" text-xl mx-3.5"/>
                    Continue with Google</button>
                </div>
                <div className="w-full my-5" style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: '1', borderTop: '1px solid black' }}></div>
                  <span style={{ margin: '0 10px' }}>or</span>
                  <div style={{ flex: '1', borderTop: '1px solid black' }}></div>
                </div>
                <div className="w-full">
                    <form className="flex flex-col items-center justify-center w-full" action="" onSubmit={handleSubmit}>
                        <InputField type="text" placeholder="First Name" onChange={handleFirstNameChange}/>
                        <InputField type="text" placeholder="Last Name" onChange={handleLastNameChange}/>
                        <InputField type="email" placeholder="Email" onChange={handleEmailChange}/>
                        <select value={userType} onChange={handleUserTypeChange} className='rounded shadow shadow-gray-400 w-full h-9 p-2 mb-4'>
                          <option value="">Select user type</option>
                          <option value="Lecturer">Lecturer</option>
                          <option value="Student">Student</option>
                        </select>
                        <InputField type="password" placeholder="Password" onChange={handlePasswordChange}/>
                        <InputField type="password" placeholder="Confirm password" onChange={handleConfirmPasswordChange}/>
                        <SubmitButton type="submit">Continue</SubmitButton>
                    </form>
                </div>
                <div className="text-sm text-slate-500 mt-7">Don't have an account?</div>
                <div className="text-sm text-cyan-600 mt-2"><Link to="/register">Create account</Link></div>
            </div>
        </div>
    )
}
export default Register;