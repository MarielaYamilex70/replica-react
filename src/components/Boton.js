import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Btn(props) {
  return (
    <>
    <div className={props.nombreclase}>
      <Button href="#" size="sm">Join Now</Button> 
      </div> 
    </>
  );
}

export default Btn;