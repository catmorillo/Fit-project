import {useState} from 'react'
// import NavButton from './NavButton'

export const Signup = () => {
    const [form, setForm] = useState ({})

    const updateForm = ({target: {name, value}}) => {

        setForm( form => ({...form, [name]: value}))
    }
    
    return (
       <> 
        <h1>sign up</h1>
        <form>
            <div>
                username: <input onChange={updateForm} name="username" />
            </div>
        </form>
       </>
    )
}
fetch('/signup', {method:'POST', header: {}, body}) 
        .then(r => {
            if(r.ok) {
                r.json().then(user => {
                })
            } else {
                r.json().then(error => {
                    useState(error.message)
                })
            }
        })