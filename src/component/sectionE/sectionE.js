import React, { useState } from 'react';
import './sectionE.css';
import Temi from '../../Temi.png';
import Ejiofor from '../../Ejiofor.png';
import Feyisola from '../../Feyisola.png';
import Karen from '../../Karen.png';
import Oluchi from '../../Oluchi.png';
import Amos from '../../Amos.png';

const SectionE = () => {
    const [people] = useState([
        {
        image: Temi,
        name: 'Temi Obadofin',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        status: 'VENDOR'
    },
    {
        image: Ejiofor,
        name: 'Promise Ejiofor',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        status: 'VENDOR'
    },
    {
        image: Feyisola,
        name: 'Feyisola Arinola',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        status: 'VENDOR'
    },
    {
        image: Karen,
        name: 'Karen Ibeh',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        status: 'VENDOR'
    },
    {
        image: Oluchi,
        name: 'Oluchi Uzo',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        status: 'VENDOR'
    },
    {
        image: Amos,
        name: 'Amos Okafor',
        text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        status: 'VENDOR'
    },
])

    return (
        <div className = 'Section-E'>
            {people.map((people, index) => {
                return <div key = { index } className = 'E-div'>
                        <img src = { people.image }  className = 'E-image' /> 
                        <h4 className = 'E-name'>{ people.name }</h4>
                        <p className = 'E-Status'>{ people.status }</p>
                        <p className = 'E-text'>{ people.text }</p>
                    </div>
            })}
        </div>
    )
}

export default SectionE;
