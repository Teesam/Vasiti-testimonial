import React, { useState } from 'react';
import './sectionC.css';
import Joseph from '../../Joseph.png';
import Adetola from '../../Adetola.png';
import Emmanuel from '../../Emmanuel.png';
import Chisom from '../../Chisom.png';
import Adunoluwa from '../../Adunoluwa.png';
import Chidi from '../../Chidi.png';

const SectionC = () => {
    const [people] = useState([
        {
        image: Joseph,
        name: 'Joseph Ike',
        location: 'In Ikeja',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        status: 'Customer'
    },
    {
        image: Adetola,
        name: 'Adetola Fasina',
        location: 'Ibadan',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisiAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        status: 'Customer'
    },
    {
        image: Emmanuel,
        name: 'Emmanuel Fayemi',
        location: 'In Akoka',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        status: 'Customer'
    },
    {
        image: Chisom,
        name: 'Chisom Obilor',
        location: 'In Magodo',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        status: 'Vendor'
    },
    {
        image: Adunoluwa,
        name: 'Adunoluwa Adeyemi',
        location: 'Iwo Road',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        status: 'Vendor'
    },
    {
        image: Chidi,
        name: 'Chidi Okeke',
        location: 'In Somolu',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        status: 'Vendor'
    },
])

    return (
        <div className = 'Section-C'>
            {people.map((people, index) => {
                return <div key = { index } className = 'C-div'>
                        <img src = { people.image }  className = 'C-image' /> 
                        <h4 className = 'C-name'>{ people.name }</h4>
                        <div className = 'Location-Status-Holder'>
                            <p className = 'Location'>{ people.location }</p>
                            <p className = 'Status'>{ people.status }</p>
                        </div>
                        <p className = 'C-text'>{ people.text }</p>
                    </div>
            })}
        </div>
    )
}

export default SectionC;
