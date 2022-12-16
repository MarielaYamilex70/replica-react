import React from 'react';
import BtnIcon from '../components/BotonIcon';
import img_covers from '../images/covers.jpg';
import img_album from '../images/albums.svg';
import img_microphone from '../images/microphone.svg';
import img_more from '../images/more.svg';
import FooterM from '../components/Footer';

const Discover = () => {
    return(
        <>
            <div className='Main'>
                <div className='contenedor'>
                    <div className='items_contenedor items_pad_dis'>
                        <h2>Discover new music</h2>
                        <BtnIcon nombre = 'Carts' imagen={img_microphone}/>
                        <BtnIcon nombre = 'Albums' imagen={img_album} />
                        <BtnIcon nombre = 'More' imagen={img_more} />
                        <p>By joining  you can benefit by listening to the latest albums released</p>
                    </div>
                    <div className='items_contenedor items_alin_dis'>
                        <img src= {img_covers} alt="" className='img_covers' />
                    </div>    
                </div>
            </div>
            <FooterM/>  
        </>
    )
 }

export default Discover;
