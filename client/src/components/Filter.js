import '../styles/Filter.css'

export default function Filter() {
    return (
        <div className='Filter'>
            <button className='best-btn'><i class="fas fa-rocket"></i><span>Best</span></button>
            <button className='new-btn'><i class="far fa-sun"></i><span>New</span></button>
            <button className='hot-btn'><i class="fas fa-fire"></i><span>Hot</span></button>
        </div>
    )
}
