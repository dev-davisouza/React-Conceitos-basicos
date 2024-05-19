import Button from './Button'

export default function Event () {

    function meuEvento() {
        console.log("Fui activated!")
    }

    return (
        <>
            <p>Clique no Botão</p>
            <Button ifClick={meuEvento} text="My first button component."/>
        </>
    )
}