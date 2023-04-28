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
// TO LOGOUT USER
function App() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetch("/check_session").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);
  
    if (user) {
      return <h2>Welcome, {user.username}!</h2>;
    } else {
      return <Login onLogin={setUser} />;
    }
  }

 







export default Form