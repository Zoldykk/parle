import { useSelector, useDispatch } from 'react-redux'
import {hide} from '../redux/modalReducer'
import '../styles/Modal.css'
export default function Modal() {
    const {isActive} = useSelector(state => state.modalReducer)
    const dispatch = useDispatch()
    return (
        <div className={isActive ? 'Modal modal-active' : 'Modal'}>
            <div className="modal-box">
                <div className="close-btn">
                    <i onClick={() =>{dispatch(hide())}} className="fas fa-times"></i>
                </div>
                <form>
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
