import { Link } from "react-router-dom"

const Shop = () =>{
    return(
        <div>
            <div className="shoptil">
                <p className="jpan2">ジャパンスタイル</p>
                <h2>Shop</h2>
                <hr></hr>
            </div>
            <div className="boxes33">
                <Link to = "/itemList">
                    <button className="tees">Tees</button>
                </Link>
                <Link to = "/itemList">
                    <button className="shorts">Shorts</button>
                </Link>
                <Link to = "/itemList">
                    <button className="hodies">Hoddies</button>
                </Link>
            </div> 
        </div>
    )
}

export default Shop