import { Link } from "react-router-dom"
import styles from '../styles/Login.module.css'

function App() {
    return (
        <div className="text-center">
            <div id={styles.loginBox}>
                <div id={styles.loginTitle}>로그인</div>
                <div className={styles.borderLine} />
                <form className={styles.formContainer}>
                    <input placeholder="아이디를 입력해주세요" />
                    <input type="password" placeholder="비밀번호를 입력해주세요" />
                    <div id={styles.findAccount} className="text-right">
                        <Link to>아이디 찾기</Link>|<Link>비밀번호 찾기</Link>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}

export default App;