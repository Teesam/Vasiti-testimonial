import React from 'react';
import './sectionB.css';
import Bimage from '../../b-image.png';
import Underline from '../../underline.png';

const SectionB = () => {
    return (
        <div className = 'Section-B'>
            <div id = 'b-image-background'>
                <img src = {Bimage } id = 'b-image'/>
            </div>
            <div id = 'B-1'>
                <h1 id = 'b-header'>Tolu & Joy’s Experience</h1>
                <h5 id = 'b-customer'>CUSTOMER</h5>
                <p id = 'b-p'>I had the best experience shopping with vasiti. Usability of the website was great,
                 very good customer service, an all round great experience. I would definately be coming back!
                  I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, 
                  an all round great experience. I would definately be coming back!</p>
                <div id = 'underline-div'>
                    <h5 id = 'b-share'>SHARE YOUR OWN STORY!</h5>
                    <img src = { Underline } id = 'underline' />
                </div>
            </div>
            
        </div>
    )
}

export default SectionB;
