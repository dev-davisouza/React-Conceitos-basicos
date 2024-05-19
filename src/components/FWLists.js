export default function FWList ({Items}) {
    /*
    Percorra a lista e pra cada item imprima-o:
        {myItems.map(item => console.log(item))}
    */

    return (
        <>
            <h3>List of Good things:</h3>
            <ul>
                {Items.length > 0 ? (
                    Items.map(item => (
                        <li>{item}</li>
                ))) : (
                    <li>Nothing can be explained!</li>
                )}
            </ul>
        </>
    )
    
}