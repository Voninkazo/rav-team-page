import React from 'react';
import Photo1 from '../images/photo1.png';
import Photo2 from '../images/photo2.png';
import Photo3 from '../images/photo3.png';
import Photo4 from '../images/photo4.png';
import Photo5 from '../images/photo4.png';
import Photo6 from '../images/photo5.png';

function Images() {
    return(
        <div>
            <picture>
                <img src={Photo1} alt=""/>
                <img src={Photo2} alt=""/>
                <img src={Photo3} alt=""/>
                <img src={Photo4} alt=""/>
                <img src={Photo5} alt=""/>
                <img src={Photo6} alt=""/>
            </picture>
        </div>
    )
}

export default Images;