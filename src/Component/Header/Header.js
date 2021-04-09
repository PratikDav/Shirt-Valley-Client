import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt, faSignOutAlt, faUserAlt} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid  row">
                    <Link className="navbar-brand col-lg-6 siteName" to="/"> <FontAwesomeIcon icon={faTshirt} /><span className="shirt">Shirt</span>Valley </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-lg-6 " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/order">Order</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="#" tabIndex="-1" aria-disabled="true">Deals</Link>
                            </li>
                            <li className="nav-link">
                            <button className="logOut" onClick={() => setLoggedInUser({})}><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</button>    
                            </li>
                                {
                                            loggedInUser ? <p className="user"><FontAwesomeIcon icon={faUserAlt} /> {loggedInUser.email}</p>
                                                        : ''   
                                }
                        </ul>
                 
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;