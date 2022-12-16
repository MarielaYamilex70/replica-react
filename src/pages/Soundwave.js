import React from 'react';
import Btn from '../components/Boton';
import img_girl from '../images/landing-page-girl.png';
import FooterM from '../components/Footer'

const Soundwave = () => {
    return(
        <>
            <div className='Main'>
                <div className='contenedor'>
                    <div className='items_contenedor'>
                        <img src={img_girl} className="img_girl" alt="" />
                    </div>
                    <div className='items_contenedor items_pad'>
                        <h2>Feel de Music</h2>
                        <p>Stream over 20 thousand songs with one<br/>click</p>
                        <Btn/>
                    </div>    
                </div>
            </div>
            <FooterM/>
        </>
    )
 }

export default Soundwave;
