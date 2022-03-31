import "../App.css";

const ItemDetail = (props) => {
    
        return(
            <div className="container">
                <div className="card-image">
                    <img src={props.img} alt={props.title} style={{width: "100%", height: "100%"}}/>
                </div>
                <div className="card-right">
                    <h5 className="item-title">{props.title}</h5>
                    <p className="item-price"><b>${props.price}</b></p>
                    <p className="item-desc">{props.desc}</p>
                    <br></br>
                    <button className="btn-add"><b>ADD TO CART</b></button>
                </div>
            </div>
        )
    }

export default ItemDetail;