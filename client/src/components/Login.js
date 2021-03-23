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
                        <a href='#'>Forgotten Password?</a>
                    </div>
                    <hr/>
                    <button className='register-btn'>Create new Account</button>
                </form>
            </div>
        </div>
    )
}
