import Item from "./Item"

function List () {
    // See about fragments in learn.md
    return (
        <> 
            <h1>Momentos de reflexão:</h1>
            <ul>
                <Item msg="Tu anda com qm vacila tu se torna um vacilão"/>
                <Item msg="Na vida tudo oscila então tu presta atenção"/>
                <Item msg="Casa, carro, apartamento"/>
                <Item msg="Cada caso um argumento"/>
            </ul>
        </>
    )
}

export default List