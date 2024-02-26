import styles from '../styles/Login.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function requestLogin() {
        //로그인 API 호출
        console.log(id, password)
        if (true) {
            navigate('/items')
        } else {

        }
    }

    function navigateToRegister() {
        console.log('로그인 화면으로 이동');
        navigate('/register')
    }

    return (
        <div className="text-center">
            <div id={styles.loginBox}>
                <div id={styles.loginTitle}>로그인</div>
                <div className={styles.borderLine} />
                <form className={styles.loginFormContainer}>
                    <input type="text"
                        placeholder="아이디를 입력해주세요"
                        defaultValue={id}
                        onChange={(e) => { setId(e.target.value) }} />
                    <input type="password"
                        placeholder="비밀번호를 입력해주세요"
                        defaultValue={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <div id={styles.findAccount} className="text-right">
                        <Link to='findUserInfo' state={{ type: 'id' }}>아이디 찾기</Link>|<Link to='findUserInfo' state={{ type: 'id' }}>비밀번호 찾기</Link>
                    </div>
                </form>
                <div className={styles.loginButtonDiv}>
                    <button onClick={navigateToRegister} className="whiteButton">회원가입</button><button onClick={requestLogin} className="purpleButton">로그인</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default App;