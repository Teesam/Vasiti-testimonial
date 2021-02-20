import React from 'react';
import './sectionA.css';
import Aimage from '../../A-image.png';

const SectionA = () => {
    return (
        <div className = 'Section-A'>
            <div id = 'a-1'>
                <h1 id = 'a-header'>Amazing Experiences from Our Wonderful Customers</h1>
                <p id = 'a-p'>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div id = 'a-image-background'>
                <img src = {Aimage } id = 'a-image'/>
            </div>
        </div>
    )
}

export default SectionA;
