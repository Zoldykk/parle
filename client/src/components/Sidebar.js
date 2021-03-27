import '../styles/Sidebar.css'
export default function Sidebar() {
    return (
        <div className='Sidebar'>
            <div className='sidebar-header'>
                <h2>Top communities</h2>
            </div>

            <div className='communities-list'>
                <ol>
                    <li>Ask Men</li>
                    <li>OnePiece</li>
                    <li>Ask Women</li>
                    <li>Web Dev</li>
                    <li>Ask Reddit</li>
                </ol>
            </div>
            
        </div>
    )
}
