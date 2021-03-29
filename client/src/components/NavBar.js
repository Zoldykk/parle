import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {display} from '../redux/modalReducer'
import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
import Logo from '../images/logo.png'

export default function NavBar() {
    const [isDropDownActive, setIsDropDownActive] = useState(false);
    const dispatch = useDispatch()
    
    const handleClick = () =>{
        if(isDropDownActive){
            setIsDropDownActive(false)
        }else{
            setIsDropDownActive(true)
        }
    }
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
                    <li>Hi, username</li>
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
