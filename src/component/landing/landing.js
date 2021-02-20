import React from 'react';
import './landing.css';
import Nav from '../nav/nav';
import SubNav from '../subNav/subNav';
import SectionA from '../sectionA/sectionA';
import SectionB from '../sectionB/sectionB';
import SectionC from '../sectionC/sectionC';
import SectionD from '../sectionD/sectionD';
import SectionE from '../sectionE/sectionE';
import Footer from '../footer/footer';

const Landing = () => {
    return (
        <div>
            <Nav />
            <SubNav />
            <SectionA />
            <SectionB />
            <SectionC />
            <SectionD />
            <SectionE />
            <Footer />
        </div>
    )
}

export default Landing;
