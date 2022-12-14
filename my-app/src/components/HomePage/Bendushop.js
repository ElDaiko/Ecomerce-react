import { Link } from "react-router-dom"

const Shop = () =>{
    return(
        <div>
            <div className="shoptil">
                <p className="jpan2">ジャパンスタイル</p>
                <h2>Shop</h2>
                <hr></hr>
            </div>
            <div className="boxes33 ">
                <Link to = "/category/Tees">
                    <button className="tees btn">Tees</button>
                </Link>
                <Link to = "/category/Short">
                    <button className="shorts btn">Shorts</button>
                </Link>
                <Link to = "/category/Hoodie">
                    <button className="hodies btn">Hoddies</button>
                </Link>
            </div> 
        </div>
    )
}

export default Shop