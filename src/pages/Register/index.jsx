import React, {useRef} from "react";
import styles from './index.module.css';
import { json } from "react-router-dom";


function Register() {
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const rePasswordRef = useRef('');

    function validate() {


        return true
    }


    function handleForm(event) {
        event.preventDefault();
        if (!isValid) {
            

            return 
        }
        const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value 
        }

        fetch('https://auth-rg69.onrender.com/api/auth/signup', {
        method: "Post",
        headers: {
            'Content-type': "application/json"
    },
    body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => {console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
    }
    return (
        <div>
            <h1 className="{style.title}">REGISTER PAGE</h1>
        <form>
            <input type="text" placeholder="Enter username"/>
            <input type="email" placeholder="Enter email"/>
            <input type="password" placeholder="Enter password"/>
            <input type="password" placeholder="Repeat password"/>

            <button onClick={handleForm}>Register</button>
        </form>
        </div>
        )
}

export default Register