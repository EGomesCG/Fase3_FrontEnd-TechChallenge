import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import icone from '../assets/coruja.png';
import { useAuth } from '../context/authContext';

interface INavbarProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
  navigate: (path: string) => void;
}

const Navbar: React.FC<INavbarProps> = ({ isAuthenticated, handleLogout, navigate }) => {
  const { isAuth } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top w-100 " style={{backgroundColor: ' #4a90e2'}}>
      <Row style={{justifyContent: "space-between", width: "100%"}} className='mx-2'>
          <Col md={9}
           style={{textAlign:"left"}}>
            <h2 className="navbar-brand"><img src={icone} style={{width:"35px", height:"35p",marginRight: "5px"}}/>Blog Educacional</h2>
          </Col>
          <Col md={3}>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => !isAuth ? navigate('/login') : handleLogout()}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarNav">
              <ul className="navbar-nav w-100">
                {isAuthenticated ? (
                  <>
                    <li className="nav-item w-100">
                      <button className="nav-link btn btn-link w-100 text-end" onClick={() => handleLogout()}>Sair</button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item w-100">
                    <button className="nav-link btn btn-link w-100 text-end"  onClick={() => navigate('/login')}>Login</button>
                  </li>
                )}
              </ul>
            </div>
          </Col>
        </Row>
    </nav>
  );
}

export default Navbar;