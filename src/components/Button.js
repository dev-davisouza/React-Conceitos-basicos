export default function Button ({text, ifClick}) {
    return (
        <button onClick={ifClick}>{text}</button>
    )
}