import 'bootstrap/dist/css/bootstrap.css';


export default function Card() {
  return (
    <>
       <div>
            <div className="card m-3" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://source.unsplash.com/random/286x180/?painting" alt=" "/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Description about this card item</p>
                        <div className="container w-100 ">
                            <h5>Total Price</h5>
                            <button className="btn btn-primary m-2 rounded">Buy</button>
                            <button className="btn btn-primary m-2 rounded">Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}
