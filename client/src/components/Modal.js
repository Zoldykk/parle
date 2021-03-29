import '../styles/Modal.css'
export default function Modal() {
    return (
        <div className='Modal'>
            <div className="modal-box">
                <div className="close-btn">
                    <i class="fas fa-times"></i>
                </div>
                <form action="">
                    <div className='form-header'>
                        <h1>Create Post</h1>
                    </div>
                    <input type="text" placeholder='title ...' name='title' />
                    <textarea name="body" placeholder='body ...' id="" cols="30"></textarea>
                    <select name="community" id="">
                        <option value="">AskMen</option>
                        <option value="">AskWomen</option>
                        <option value="">AskReddit</option>
                    </select>
                    <button type='submit'>Post</button>
                </form>
            </div>
        </div>
    )
}
