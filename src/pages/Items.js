import { useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    const itemType = location.state?.data; //API 통신 파라미터
    console.log("item type : " + itemType)

    return (
        <div>
            
        </div>
    )
}

export default App;