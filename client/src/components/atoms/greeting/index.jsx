
import styles from './greeting.module.scss'


function Greeting() {
    return (
        <section className={styles.container}>
            <h2>Hello, <span>Tanmaya! 👋🏼</span></h2>
            <p>All notes are here, in one place!</p>
        </section>
        
    )
}

export default Greeting
