import React, { useEffect, useState } from 'react';
import { Badge} from 'react-bootstrap';
import Cart from '../screens/Cart';
import Modal from '../Modal';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './ContextReducer';



function Navbar() {
  let data = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false)

  useEffect(() => {
    const checkToken = () => {
      setIsLoggedIn(!!localStorage.getItem("authToken"));
    };

    // Listen to storage change across tabs
    window.addEventListener('storage', checkToken);

    // Optionally, update on mount as well
    checkToken();

    return () => window.removeEventListener('storage', checkToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">Home</Link>
              </li>
              {isLoggedIn &&
                <li className="nav-item">
                  <Link className="nav-link active fs-5" to="/">My Orders</Link>
                </li>
              }
            </ul>
            {!isLoggedIn ? (
              <div className='d-flex'>
                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1 " to="/createuser">Sign-up</Link>
              </div>
            ) : (
              <div>
                <div className='btn bg-white text-success mx-2' onClick= {()=>{setCartView(true)}}>My Cart {" "}
                  <Badge pill bg ="danger">{data.length}</Badge>
                </div>
                {cartView? <Modal onClose={() => setCartView(false)}><Cart/></Modal>:null}
                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
