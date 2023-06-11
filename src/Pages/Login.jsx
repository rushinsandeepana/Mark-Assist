import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import Logo from '../photos/loginLogo.png'
function Login(){

    const handleClick=()=>{
        alert("clicked");
    }

    return (
        <div className=" border border-red-900 flex justify-center items-center h-full">
            <div className="flex flex-col items-center rounded rounded-sm shadow shadow-gray-400 w-96 h-fit py-10 px-10">
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
                    <form className="flex flex-col items-center justify-center w-full" action="">
                        <input className="rounded shadow shadow-gray-400 w-full h-9 p-2 mb-4" type="text" placeholder="E-mail address or username"/>
                        <input className="rounded shadow shadow-gray-400 w-full h-9 p-2 mb-4" type="text" placeholder="Password"/>
                        <button className="rounded rounded-sm bg-sky-600 w-full h-9  text-white">Continue</button>
                    </form>
                </div>
                <div className="text-sm text-slate-500 mt-7">Don't have an account?</div>
                <div className="text-sm text-cyan-600 mt-2"><Link to="/register">Create account</Link></div>
            </div>
        </div>
    )
}
export default Login;