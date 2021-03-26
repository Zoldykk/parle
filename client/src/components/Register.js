import { useState } from 'react'
import {Link, useHistory } from 'react-router-dom'
import '../styles/Register.css'
import Logo from '../images/logo.png'


export default function Register() {
    let history = useHistory();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = async (e) =>{
        setUsernameError('')
        setEmailError('')
        setPasswordError('')
        
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
            })
            const data = await response.json()
            if(data.errors){
                setUsernameError(data.errors.username)
                setEmailError(data.errors.email)
                setPasswordError(data.errors.password)
            }else{
                history.push("/")
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='container'>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="username">
                        <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='Username'/>
                        <div className='username-error'>{usernameError}</div>
                    </div>

                    <div className="email">
                        <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Email'/>
                        <div className='email-error'>{emailError}</div>
                    </div>

                    <div className="password">
                        <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Password'/>
                        <div className='password-error'>{passwordError}</div>
                    </div>

                    <button className='register-btn' type='submit'>Register</button>
                    <hr/>
                    <Link to='/' className='login-btn'>Login</Link>
                </form>
            </div>
        </div>
    )
}