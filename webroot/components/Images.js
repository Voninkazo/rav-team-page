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
        <div className="container">
            <ul className="image_container">
                <li>
                    <img src={Photo1} alt=""/>
                    <span className="names">Bill Mahoney</span>
                    <p><span>Product owner</span></p>
                </li>
                <li>
                    <picture>
                        <img src={Photo2} alt=""/>
                        <span className="names">Saba Cabrera</span>
                    </picture>
                    <span>Art director</span>
                </li>
                <li>
                    <picture>
                        <img src={Photo3} alt=""/>
                        <span className="names">Shae Le</span>
                    </picture>
                    <span>Tech lead</span>
                </li>
                <li>
                    <picture>
                        <img src={Photo4} alt=""/>
                        <span className="names">Skylah Lu</span>
                    </picture>
                    <span>ux designer</span>
                </li>
                <li>
                    <picture>
                        <img src={Photo5} alt=""/>
                        <span className="names">Giff Richards</span>
                    </picture>
                    <span>developer</span>
                </li>
                <li>
                    <picture>
                        <img src={Photo6} alt=""/>
                        <span className="names">Stan John</span>
                    </picture>
                    developer
                </li>
            </ul>
        </div>
    )
}

export default Images;