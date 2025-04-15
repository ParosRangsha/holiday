import React, { useState } from 'react'
import Container from '../Components/Container'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const auth = getAuth();
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    let handlepassword = (e)=>{
        setPassword(e.target.value);
    }
    let hanleSignUp = (e)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('ami paisi', userCredential);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('painai');
            
        });
    }
  return (
    <div className="signup py-[50px]">
        <Container>
            <div className="heading">
                <h1 className='text-[50px] font-bold'>Sign Up</h1>
            </div>
            <div className="form">
                <div className="boxes w-1/2 flex gap-3">
                    <div className="items flex flex-col w-1/2">
                        <label htmlFor="bmail">Email address</label>
                        <input onChange={handleEmail} type="mail" id='bmail' placeholder='company@domain.com' className='border-[1px] border-[#ddd] p-[10px]' />
                    </div>
                    <div className="items flex flex-col w-1/2">
                        <label htmlFor="bpass">Password</label>
                        <input onChange={handlepassword} type="password" id='bpass' placeholder='Password' className='border-[1px] border-[#ddd] p-[10px]' />
                    </div>
                </div>
                <button onClick={hanleSignUp} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </Container>
    </div>
  )
}

export default Signup