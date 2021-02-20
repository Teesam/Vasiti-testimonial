import React from 'react';
import './footer.css';
import FooterImage from '../../footer-image.png';
import Facebook from '../../fb.png';
import Instagram from '../../ig.png';
import Twitter from '../../tw.png';
import Linkedin from '../../in.png';


const Footer = () => {
    return (
        <div className = 'Footer'>
            <div id = 'f-1'>
                <img src = { FooterImage} id = 'footer-image' />
                <div>
                    <h1>Be a  member of our community 🎉</h1>
                    <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                    <div id = 'input-holder'>
                        <input placeholder = 'enter your email address' type = 'text' id = 'footer-input' />
                        <button id = 'footer-button'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div id = 'f-2'>
                <div>
                    <h5>Company</h5>
                    <ul>
                        <li>About us</li>
                        <li>Term of use</li>
                        <li>Privacy policy</li>
                        <li>Press & Media</li>
                    </ul>
                </div>
                <div>
                    <h5>Products</h5>
                    <ul>
                        <li>Marketplace</li>
                        <li>Magazine</li>
                        <li>Seller</li>
                        <li>Wholesale</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div>
                    <h5>Careers</h5>
                    <ul>
                        <li>Become a Campus Rep</li>
                        <li>Become a Varsity Influencer</li>
                        <li>Become a Campus Writer</li>
                        <li>Become an Affiliate</li>
                    </ul>
                </div>
                <div>
                    <h5>Get in touch</h5>
                    <ul>
                        <li>Contact us</li>
                        <li>Partner with us</li>
                        <li>Advertise with us</li>
                        <li>Help/FAQS</li>
                    </ul>
                </div>
                <div>
                    <h5>Join our community</h5>
                    <div>
                        <img src = { Facebook } className = 'Socials' />
                        <img src = { Instagram } className = 'Socials' />
                        <img src = { Twitter } className = 'Socials' />
                        <img src = { Linkedin } className = 'Socials' />
                    </div>
                    <p id = 'letter'>Email Newsletter</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
