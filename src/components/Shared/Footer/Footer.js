import React from 'react';
import { faFacebook,faGooglePlus,faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterCard from '../FooterCard/FooterCard';

const footerData = [
    {
        title:'About',
        emergency:'Emergency Dental Care',
        checkUp: 'Check Up',
        treatment:'Treatment of personal diseases',
        toothExtraction:'Tooth Extraction'
    },
    {
        title:'Products',
        emergency:'Emergency Dental Care',
        checkUp: 'Check Up',
        treatment:'Treatment of personal diseases',
        toothExtraction:'Tooth Extraction'
    },
    {
        title:'Support',
        emergency:'Emergency Dental Care',
        checkUp: 'Check Up',
        treatment:'Treatment of personal diseases',
        toothExtraction:'Tooth Extraction'
    },
    {
        title:'Our Address',
        address:'New York-10101',
        icon1:faFacebook,
        icon2:faGooglePlus,
        icon3:faTwitter
    }

]

const Footer = () => {
    return (
        <section className='bg-dark pt-5' style={{height:"300px"}}>
           <div className='d-flex justify-content-center row'>
           {
               footerData.map(footer => <FooterCard footer={footer}></FooterCard>)
           }
           </div>
           <div className='mt-5 mb-5 text-center text-white'>
                <small>Copyright {new Date().getFullYear()} All Rights Reserved</small>
           </div>
       </section>
    );
};

export default Footer;