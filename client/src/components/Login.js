import {Link} from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
    return (
        <div className='container'>
            <div className="logo">
                <img src="/logo.png" alt=""/>
            </div>
            <div className="form">
                <form action="">
                    <input type="text" placeholder='Username'/>
                    <div className='username-error'></div>
                    <input type="password" placeholder='Password'/>
                    <div className='password-error'></div>
                    <button className='login-btn' type='submit'>Login</button>
                    <div className='password-reset'>
                        <Link href='#'>Forgotten Password?</Link>
                    </div>
                    <hr/>
                    <Link to='/register' className='register-btn'>Create new Account</Link>
                </form>
            </div>
        </div>
    )
}