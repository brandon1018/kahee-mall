function App() {

    const title = "KaheeMall"
    let categoryList = []

    //API 통신
    categoryList = ['category1', 'category2', 'category3', 'category4']

    return (
        <div id="side-bar">
            <h1 id="side-bar-title">{title}</h1>
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