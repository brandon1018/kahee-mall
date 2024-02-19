import { Link } from "react-router-dom";

function App() {
    return (
        <div id="title-bar">
            <div id="title-bar-header">
                <div className="title-left">
                    <span>업사이클링 브랜드 가희몰에서 <b>여러분의 가치</b>를 높여보세요.</span>
                </div>
                <div className="title-right">
                    <button><Link to={'/login'}>Login</Link></button>
                </div>
            </div>

            <div className="text-right">
                <button><Link to={'/register'}>장바구니</Link></button>
                <button><Link to={'/bagooni'}>마이페이지</Link></button>
            </div>
        </div>
    )
}

export default App;