import styles from '../styles/Login.module.css'

function App() {
    return (
        <div className="text-center">
            <div id={styles.loginBox}>
                <form className={styles.formContainer}>
                    <input placeholder="ID" />
                    <input placeholder="Password" />
                    <button>Log-in</button>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}

export default App;