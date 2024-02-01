import { Link } from "react-router-dom"

function App() {

    const title = "KaheeMall"
    let categoryList = []

    //API 통신
    categoryList = ['category1', 'category2', 'category3', 'category4']

    return (
        <div id="side-bar">
            <div id="side-bar-title">
                <Link to='/'>{title}</Link>
            </div>
            <div className="text-left">
                <ul className="side-bar-ul">
                    {
                        categoryList.map((item, index) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default App;