
import { useState } from "react"


export default function Form () {

    const [name, setName] = useState('')

    function registerUser (event) {
        event.preventDefault()
        console.log(name)
        console.log(`Welcome!`)
    }

    return (
        <form onSubmit={registerUser}>
            <legend>My Register</legend>
            <input type="text" placeholder="Type your name..." />
            <input type="password" onChange={(e) => setName(e.target.value)}/>
            <input type="submit" value="Register" />
        </form>
    )
}