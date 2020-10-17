import React from 'react';
import Photo1 from '../images/photo1.png';
import Photo2 from '../images/photo2.png';
import Photo3 from '../images/photo3.png';
import Photo4 from '../images/photo4.png';
import Photo5 from '../images/photo5.png';
import Photo6 from '../images/photo6.png';
import '../css/index.css';

function Images() {
    return(
        <div className="container img_wrapper">
            <ul className="image_container">
                <li>
                    <img src={Photo1} alt=""/>
                    <span className="names">Bill Mahoney</span>
                    <p id="bill">Product owne</p>
                </li>
                <li className="lower-img">
                    <img src={Photo2} alt=""/>
                    <span className="names">Saba Cabrera</span>
                    <p id="saba">Art director</p>
                </li>
                <li>
                    <img src={Photo3} alt=""/>
                    <span className="names">Shae Le</span>
                    <p id="shae">Tech lead</p>
                </li>
                <li className="lower-img">
                    <img src={Photo4} alt=""/>
                    <span className="names">Skylah Lu</span>
                    <p id="lu">ux designer</p>
                </li>
                <li className="lower-img-lg">
                    <img src={Photo5} alt=""/>
                    <span className="names">Giff Richards</span>
                    <p id="giff">developer</p>
                </li>
                <li className="lower-img">
                    <img src={Photo6} alt=""/>
                    <span className="names">Stan John</span>
                    <p id="stan">developer</p>
                </li>
            </ul>
        </div>
    )
}

export default Images;