import NavBar from './NavBar'
import Filter from './Filter'
import Sidebar from './Sidebar'
import Card from './Card'
import '../styles/Home.css'
import Modal from './Modal'
export default function Home() {
    return (
        <div className='Home'>
            <NavBar />
            <main>
                <div className="feed">
                    <Filter />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <aside>
                    <Sidebar />
                </aside>

                <Modal/>
            </main>
        </div>
    )
}
