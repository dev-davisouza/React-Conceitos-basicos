import styles from './Person.module.css'

function Person ({name, age, gender, country}) {
    return (
        <p className={styles.msg} >I'm {age}, my name is {name}, i'm a {gender} and i'm from {country} </p>
    )
}

export default Person