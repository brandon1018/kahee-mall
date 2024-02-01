import { Link } from "react-router-dom";

function App() {
    return (
        <div id="title-bar">
            <button><Link to={'/register'}>Register</Link></button>
            <button><Link to={'/join'}>Join</Link></button>
            <button><Link to={'/login'}>Login</Link></button>
            <button><Link to={'/bagooni'}>Bagooni</Link></button>
        </div>
    )
}

export default App;