import { Link } from "react-router-dom"

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                        <form className="form-inline d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary my-2 my-sm-0 m-4" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?art" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?burger" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?noodles" alt="Third slide" />
                    </div>
                </div>

                <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </Link>
                <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </Link>
            </div>
        </div>
    )
}
