import {useState} from 'react'

function Form({addUser, addEmail, addPassword, addAge}){
  // const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   //   const capitalized = userName.chartAt(0).toUpperCase() + userName.slice(1)
//   // };

//   const handleUserSubmit = (e) => {
//     e.preventDefault();
//     let userObj = {
//       name: name,
//       age: age,
//       email: email,
//       password: password
//     };
//     fetch('/users', {
//       method:"POST",
//       headers: {'Content-Type': "application/json"},
//       body: JSON.stringify(userObj),
//     })
//       .then((r) => r.json())
//           if (r.ok) {
//             alert ("Added User successfully")
//             addUser(userObj)
//           } else {
//               alert("User must be 17 years old")
//           }
//       }
//     e.target.reset()
// }


// return (
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name:
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//     </label>
//     <label>
//       Email:
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//     </label>
//     <label>
//       Password:
//       <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
//     </label>
//     <label>
//       Age:
//       <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
//     </label>
//     <button type="submit">Submit</button>
//   </form>
// );
 }

export default Form;











// function Form({addEmail, addBirthday}) {
//     const [email, setEmail] = useState('');
//     const [birthday, setBirthday] = useState('');
//     const [showEmail, setShowEmail] = useState(true);
//     const [showBirthday, setShowBirthday] = useState(true);

//     const handleEmail = () => {
//         setShowEmail(!showEmail);
//     } ;
//     const handleBirthday = () => {
//         setShowBirthday(!showBirthday);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();


//     }
// }





// TO LOGOUT USER
// function App() {
//     const [user, setUser] = useState(null);
  
//     useEffect(() => {
//       fetch("/check_session").then((response) => {
//         if (response.ok) {
//           response.json().then((user) => setUser(user));
//         }
//       });
//     }, []);
  
//     if (user) {
//       return <h2>Welcome, {user.username}!</h2>;
//     } else {
//       return <Login onLogin={setUser} />;
//     }
//   }

 







