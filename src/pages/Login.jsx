import React, { useState } from 'react'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    let handlepassword = (e)=>{
        setPassword(e.target.value);
    }
    let handleSubmit = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Successfuly Login');
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Wrong input');
            
        });
    }
  return (
    <div className="login py-[50px]">
        <Container>
            <div className="title">
                <h1 className='text-[50px] font-bold pb-[30px]'>Login</h1>
                <p className='w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
            <h1 className='font-bold text-[40px] py-[30px]'>Returning Customer</h1>
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
            <button onClick={handleSubmit} className='inline-block w-[200px] text-center my-[10px] duration-[1s] font-bold py-[15px] px-[20px] bg-[#000] text-[#fff] border-[1px] border-[#000] hover:bg-[#fff] hover:text-[#000]'>Login</button>
            <div className="new py-[30px] w-1/2">
                <h1 className='text-[40px] font-bold'>New Customer</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <Link to='/signup' className='inline-block w-[200px] text-center my-[10px] duration-[1s] font-bold py-[15px] px-[20px] bg-[#000] text-[#fff] border-[1px] border-[#000] hover:bg-[#fff] hover:text-[#000]'>Continue</Link>
            </div>
        </Container>
    </div>
  )
}

export default Login