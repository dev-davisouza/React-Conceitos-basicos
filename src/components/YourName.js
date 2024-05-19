export default function YourName ({setName}) {
    return (
        <div>
            <h2>Your name</h2>
            <input 
                type="text" 
                placeholder="What's your name?" 
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}