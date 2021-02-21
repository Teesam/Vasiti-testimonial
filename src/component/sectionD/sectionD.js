import React from 'react';
import './sectionD.css';
import Dimage from '../../d-image.png';
import Underline from '../../underline.png';

const SectionD = () => {
    return (
        <div className = 'Section-D'>
            <div id = 'd-1'>
                <h1 id = 'd-header'>Josiah’s Experience</h1>
                <h5 id = 'vendor'>VENDOR</h5>
                <p id = 'd-p'>I had the best experience shopping with vasiti. Usability of the website was great, 
                very good customer service, an all round great experience. I would definately be coming back! 
                I had the best experience shopping with vasiti. Usability of the website was great, very good
                 customer service, an all round great experience. I would definately be coming back!</p>
                 <div id = 'underline-div'>
                    <h5 id = 'd-share'>SHARE YOUR OWN STORY!</h5>
                    <img src = { Underline } id = 'underline' />
                 </div>
            </div>
            <div id = 'd-image-background'>
                <img src = {Dimage } id = 'd-image'/>
            </div>
            
        </div>
    )
}

export default SectionD;

