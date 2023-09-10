import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


export default function Card({ImagePath, CardTitle, CardText}) {
  return (
    <>
        <div className="col-md-4 mb-4">
                <div className="card">
                    <img
                    src={ImagePath} // Replace with the actual image URL
                    className="card-img-top"
                    alt="Artwork 1"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{CardTitle}</h5>
                        <p className="card-text">{CardText}</p>
                        <a href="/product/1" className="btn btn-primary">
                            View Details
                        </a>
                    </div>
                </div>
        </div>
    </>
  )
}
