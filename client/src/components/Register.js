import {Link} from 'react-router-dom'
import '../styles/Register.css'

export default function Register() {
    return (
        <div className='container'>
            <div className="logo">
                <img src="/logo.png" alt=""/>
            </div>
            <div className="form">
                <form>
                    <input type="text" placeholder='Username'/>
                    <div className='username-error'></div>
                    <input type="text" placeholder='Email'/>
                    <div className='email-error'></div>
                    <input type="password" placeholder='Password'/>
                    <div className='password-error'></div>
                    <input type="password" placeholder='Password verify'/>
                    <div className='passwordVerify-error'></div>
                    <button className='register-btn' type='submit'>Register</button>
                    <hr/>
                    <Link to='/' className='login-btn'>Login</Link>
                </form>
            </div>
        </div>
    )
}
