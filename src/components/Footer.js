import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';

function FooterM() {
  return (
    <div className="footerm">
        <div className="header_l">
            <Nav  className="justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey="disabled" style={{ color:'white' }}>About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" style={{ color:'white' }}>Contact</Nav.Link>
                </Nav.Item>
            
            </Nav>
        </div>
        <div className="header_r">
            <Nav defaultActiveKey="/soundwave"  className="justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey="disabled" style={{ color:'white' }}><img src={twitter} className='img_footer' alt=''/>Twitter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" style={{ color:'white' }}><img src={facebook} className='img_footer' alt=''/>Facebook</Nav.Link>
                </Nav.Item>
            
            </Nav>
        
        </div>
    </div>

  );
}

export default FooterM;