import '../styles/NavBar.css'
import Logo from '../images/logo.png'
export default function NavBar() {
    return (
        <div className='NavBar'>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>

            <div className='search'>
                <input type="text" placeholder='Search...'/>
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Hi, username</li>
                    <li><i class="fas fa-pen"></i></li>
                    <li><i class="fas fa-power-off"></i></li>
                </ul>
            </div>
        </div>
    )
}
