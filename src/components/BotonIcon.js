//import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

function BtnIcon(props) {
  return (
    // <>
    //   <Button href="#">{props.nombre}</Button> 
    // </>

    <>
      <button className='iconos'><img src={props.imagen} alt="x" className="imagen_icon"/>{props.nombre}</button>
    </>

  );
}

export default BtnIcon;