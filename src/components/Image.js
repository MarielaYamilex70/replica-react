

function ImgM(props) {
    return(
      
        <div className="">
          <img
            src= {props.imagen}
            alt="pokemon-1"
          />
          <h3>
            {props.nombre}  <span>{props.tipo}</span>
          </h3>
        </div>
     
  
    )
  }

  export default ImgM;