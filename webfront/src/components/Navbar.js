import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    navigate("/");
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar bg-secondary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">webkART</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>
                    {
                      (localStorage.getItem("authToken")) 
                      ? <>
                          <li className="nav-item">
                            <Link className="nav-link" to="/postblog">PostBlogs</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="">My Orders</Link>
                          </li>
                        </>
                      :''
                    }
                </ul>
                {
                      (!localStorage.getItem("authToken")) 
                      ?
                        <div className="d-flex">
                          <Link className="btn btn-primary mx-1" to="/login">Login</Link>
                        </div>
                      :
                      <div className="d-flex">
                        <Link className="nav-link mx-1 nav-item" to="/cart">Cart</Link>
                        <button className="btn btn-primary mx-1" to="/login" onClick={handleLogout}>Logout</button>
                      </div>
                }
          </div>
        </div>
      </nav> 
    </>
  )
}
