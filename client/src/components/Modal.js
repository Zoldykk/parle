import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {hide} from '../redux/modalReducer'
import '../styles/Modal.css'
export default function Modal() {
    const {isActive} = useSelector(state => state.modalReducer)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [community, setCommunity] = useState('')

    const [currentUserId, setCurrentUserId] = useState('')
    useEffect(() => {
        const fetchCurrentUser = async() =>{
            try {
                const response = await fetch('http://localhost:5000/getUser', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                })
                const currentUser = await response.json()
                setCurrentUserId(currentUser._id)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCurrentUser()
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/home', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    title,
                    description,
                    community,
                    originalPoster: currentUserId
                })
            })
            const data = await response.json()
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className={isActive ? 'Modal modal-active' : 'Modal'}>
            <div className="modal-box">
                <div className="close-btn">
                    <i onClick={() =>{dispatch(hide())}} className="fas fa-times"></i>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-header'>
                        <h1>Create Post</h1>
                    </div>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title ...' name='title' />
                    <textarea onChange={(e) => setDescription(e.target.value)} name="description" placeholder='description ...' id="" cols="30"></textarea>
                    <select onChange={(e) => setCommunity(e.target.value)} name="community" id="">
                        <option>AskMen</option>
                        <option>AskWomen</option>
                        <option>AskReddit</option>
                    </select>
                    <button type='submit'>Post</button>
                </form>
            </div>
        </div>
    )
}
