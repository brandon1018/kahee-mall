import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

function App() {

    const navigate = useNavigate();

    function cancelRegister() {
        navigate('/login')
    };

    function requestRegister() {

    };



    return (
        <div className="text-center">
            <div id={styles.loginBox}>
                <div id={styles.loginTitle}>회원가입</div>
                <div className={styles.borderLine} />
                <form className={styles.registerFormContainer}>
                    <div><span className='requiredField'>아이디</span><input type="text" placeholder="아이디를 입력해주세요" /><button className={styles.floatButton}>중복확인</button></div>
                    <div><span className='requiredField'>비밀번호</span><input type="password" placeholder="비밀번호를 입력해주세요" /></div>
                    <div><span className='requiredField'>비밀번호확인</span><input type="password" placeholder="비밀번호를 한번 더 입력해주세요" /></div>
                    <div><span className='requiredField'>이름</span><input type="text" placeholder="이름을 입력해주세요" /></div>
                    <div><span className='requiredField'>이메일</span><input type="email" placeholder="ex: kaheemall@kahee.com" /><button className={styles.floatButton}>중복확인</button></div>
                    <div><span className='requiredField'>휴대폰</span><input type="tel" placeholder="숫자만 입력해주세요" /><button className={styles.floatButton}>인증번호 받기</button></div>
                    <div><span>생년월일</span><input type="date" placeholder="YYYY / MM / DD" /></div>
                    <div>
                        <span>성별</span>
                        <div id={styles.genderDiv}>
                            <input type="radio" className={styles.genderRadio} name="gender" id="male" /><label htmlFor="male">남자</label>
                            <input type="radio" className={styles.genderRadio} name="gender" id="female" /><label htmlFor="female">여자</label>
                            <input type="radio" className={styles.genderRadio} name="gender" id="none" /><label htmlFor="none">선택 안함</label>
                        </div>
                    </div>
                </form>
                <div className={styles.borderLine} />
                <div id={styles.terms}>
                    <span>약관</span>
                    <div id={styles.termsContent}>내용<br />내용<br />내용<br />내용<br />내용<br />내용<br />내용<br /></div>
                    <div id={styles.termsAgree}>
                        <label>개인정보 처리방침 약관에 동의하시겠습니까?</label><input type="checkbox" />
                    </div>
                </div>
                <div className={styles.loginButtonDiv}>
                    <button onClick={cancelRegister} className="whiteButton">취소</button><button onClick={requestRegister} className="purpleButton">회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default App;