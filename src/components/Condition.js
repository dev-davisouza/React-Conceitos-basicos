import { useState } from "react";
import Button from "./Button";

export default function Condition () {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(event) {
        event.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail () {
        setUserEmail('')
    }

    return (
        <form>
            <legend>Register your e-mail</legend>
            <input 
                id="mail" 
                type="email" 
                placeholder="Type your email.." 
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button ifClick={enviarEmail} text="Submit e-mail"/>
            {userEmail && (
                <div>
                    <p>The email of the user is : {userEmail}</p>
                    <Button ifClick={limparEmail} text="Clear Email"/>
                </div>
            )}
        </form>
    )
}