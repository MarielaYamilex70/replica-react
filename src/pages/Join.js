import React from 'react';
import Btn from '../components/Boton';
import FooterM from '../components/Footer'

const Join = () => {
    return(
        <>
            <div className='Main'>
            
                <div className='contenedor'>
                    <div className='items_contenedor'>
                    <h2> Join the fun.</h2>
                    </div>
                    <div className='items_contenedor'>
                        <form className='form_join'>
                            <label className='labeljoin'>Name:</label><br/>
                            <input className='inputjoin'/><br/><br/>
                            <label className='labeljoin'>Email:</label><br/>
                            <input className='inputjoin'/><br/><br/>
                            <label className='labeljoin'>Password:</label><br/>
                            <input className='inputjoin'/><br/><br/>
                            <Btn nombreclase='d-grid'/>
                        </form>
                    </div>    
                </div>
            </div>
            <FooterM/>
        </>
    )
 }

export default Join;
