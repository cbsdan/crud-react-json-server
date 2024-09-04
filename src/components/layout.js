import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-warning border-bottom box-shadow ">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src='/logo.jpg' alt='img' width='30' className='me-2'/>
                    Cooking Mamau
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav bg-warning">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/admin/products">Product</Link></li>
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export function Footer() {
    return (
        <div className="text-center p-4 border-top bg-warning">
            <img src='/logo.jpg' alt='img' width='30' className='me-2'/>
            Cooking Mamau
        </div>
    )
}