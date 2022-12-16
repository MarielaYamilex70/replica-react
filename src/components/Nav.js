import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';

function NavM() {
  return (
    
    <Nav defaultActiveKey="/soundwave" className="justify-content-left">
      
      <Nav.Item>
        <Nav.Link href="/discover" style={{ color:'white' }}>Discover</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/join" style={{ color:'white' }}>Join</Nav.Link>
      </Nav.Item>
      
    </Nav>

    // <header className="header">
    //     <Link to="/soundwave">Soundwave</Link>
    //     <br/>
    //     <Link to="/discover">Discover</Link>
    //     <br/>
    //     <Link to="/join">Join</Link>
    // </header>
  );
}

export default NavM;