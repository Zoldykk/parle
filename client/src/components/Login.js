import { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            const data = await response.json()
            console.log(data)
            if(data){
                setUsernameError(data.username)
                setPasswordError(data.password)
            }else{
                history.push('/')
            }
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className='container'>
            <div className="logo">
                <img src="/logo.png" alt=""/>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="username">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username'/>
                        <div className='username-error'>{usernameError}</div>
                    </div>

                    <div className="password">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/>
                        <div className='password-error'>{passwordError}</div>
                    </div>
                    <button className='login-btn' type='submit'>Login</button>
                    <div className='password-reset'>
                        <Link to='#'>Forgotten Password?</Link>
                    </div>
                    <hr/>
                    <Link to='/register' className='register-btn'>Create new Account</Link>
                </form>
            </div>
        </div>
    )
}