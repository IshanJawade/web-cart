import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <>
        <nav className="navbar fixed-bottom bg-body-tertiary">
            <div className="container-fluid">
                <Link className="nav-link navbar-brand" to="/contact">Contact Us</Link>
            </div>
        </nav>
    </>
  )
}
