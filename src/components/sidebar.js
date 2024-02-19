import { Link } from "react-router-dom"

function App() {

    const title = "KaheeMall"
    let categoryList = []

    //API 통신
    categoryList = ['Clothes', 'Bags', 'Shoes', 'Accessories', 'Etc']

    return (
        <div id="side-bar">
            <div id="side-bar-title">
                <Link to='/'>{title}</Link>
            </div>
            <div className="text-left">
                <Link className="side-bar-contents"to='items'>All Contents</Link>
                <div className="border-line"/>
                <ul className="side-bar-ul">
                    {
                        categoryList.map((item, index) => {
<<<<<<< HEAD
                            return (
                                <li key={ item }><Link to='items' state={{ data: item }}>{item}</Link></li>
=======
                            // return <li key={item} onClick={}>{item}</li>
                            let itemRouter = "/item/" + item;
                            
                            return (
                                <li><Link to={itemRouter} key={item}>{item}</Link></li>
>>>>>>> 531504eb23dedd92ccbdfb78627b19cccaffd174
                            )
                        })
                    }
                </ul>
                <Link className="side-bar-contents"to='inquiry'>Q&A</Link>
                <div className="border-line"/>
                <Link className="side-bar-contents"to='review'>Review</Link>
                <div className="border-line"/>
            </div>
        </div>
    )
}

export default App;