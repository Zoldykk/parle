import '../styles/Filter.css'

export default function Filter() {
    return (
        <div className='Filter'>
            <button className='best-btn'><i className="fas fa-rocket"></i><span>Best</span></button>
            <button className='new-btn'><i className="far fa-sun"></i><span>New</span></button>
            <button className='hot-btn'><i className="fas fa-fire"></i><span>Hot</span></button>
        </div>
    )
}
