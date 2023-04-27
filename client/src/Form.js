import {useState} from 'react'

function Form({addEmail, addBirthday}) {
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [showEmail, setShowEmail] = useState(true);
    const [showBirthday, setShowBirthday] = useState(true);

    const handleEmail = () => {
        setShowEmail(!showEmail);
    } ;
    const handleBirthday = () => {
        setShowBirthday(!showBirthday);
    }
    const handleSubmit = (e) => {
        e.preventDefault();


    }
}











export default Form