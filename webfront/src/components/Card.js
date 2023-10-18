import 'bootstrap/dist/css/bootstrap.css';


export default function Card({itemName, itemDec, itemImg, itemPrice}) {
  return (
    <>
       <div>
            <div className="card m-3" style={{width: "18rem"}}>
                <img className="card-img-top" src={ itemImg } alt=" " width="200" height="160" />
                    <div className="card-body">
                    <h5 className="card-title">{ itemName } </h5>
                        <p className="card-text">{ itemDec } </p>
                        <div className="container w-100 ">
                            <h5>{ itemPrice }Item Price</h5>
                            <button className="btn btn-primary m-2 rounded">Buy</button>
                            <button className="btn btn-primary m-2 rounded">Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}
