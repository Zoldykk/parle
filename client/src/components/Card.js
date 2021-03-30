import '../styles/Card.css'
export default function Card() {
    return (
        <div className='Card'>
            <div className='card-info'>
                <span>r/askmen</span>
                <span>5h</span>
            </div>
            <div className='card-title'>
                <h3>Websites i found useful during my web development journey.</h3>
            </div>
            <div className='card-description'>
                <p>A powerful desktop app for creating responsive websites using the Bootstrap framework."</p>
            </div>
            <div className='card-options'>
                <div className='vote'>
                    <button className='upvote'><i className="fas fa-arrow-alt-up"></i></button>
                    <span className='vote-counter'>15</span>
                    <button className='downvote'><i className="fas fa-arrow-alt-down"></i></button>
                </div>
                <div className='comment'>
                <i className="fas fa-comment-alt"></i>
                <span className='comment-counter'>8</span>
                </div>
                <div className='save'>
                    <i className="fas fa-bookmark"></i>
                    <span>Save</span>
                </div>
            </div>
        </div>
    )
}
