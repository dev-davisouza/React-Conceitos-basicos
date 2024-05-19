export default function Greet ({name}) {

    function makeGreet (AnyName) {
        return `Hello, ${AnyName}, How you feeling?`
    }

    return (
        <>
            {name && <p>{makeGreet(name)}</p> }
        </>
    )
}