import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {display} from '../redux/modalReducer'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
import Logo from '../images/logo.png'

export default function NavBar() {
    const [isDropDownActive, setIsDropDownActive] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const dispatch = useDispatch()
    
    const handleClick = () =>{
        if(isDropDownActive){
            setIsDropDownActive(false)
        }else{
            setIsDropDownActive(true)
        }
    }

    useEffect( () => {
        const fetchCurrentUser = async () =>{
            const response = await fetch('http://localhost:5000/getUser', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
                })
                const currentUserInfo = await response.json()
                setCurrentUser(currentUserInfo.username)
        }
        fetchCurrentUser()
    }, [])
    return (
        <div className='NavBar'>
            <div className="logo">
                <Link to='/home'><img src={Logo} alt=""/></Link>
            </div>

            <div className='search'>
                <input type="text" placeholder='Search...'/>
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Hi, {currentUser}</li>
                    <li onClick={handleClick}><i className="fas fa-pen"></i></li>
                    <li><Link to='/logout'><i className="fas fa-power-off"></i></Link></li>
                </ul>
            </div>

            <div className={isDropDownActive ? 'drop-down-content dorpdown-active' : 'drop-down-content'}>
                <ul>
                    <li><span>New Community</span><i className="fas fa-users"></i></li>
                    <li onClick={() =>{dispatch(display())}}><span>New Post</span><i className="fas fa-pen"></i></li>
                </ul>
            </div>
        </div>
    )
}
