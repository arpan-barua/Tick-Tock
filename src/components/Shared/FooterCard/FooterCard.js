import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterCard = ({footer}) => {
    return (
        <div className='footer-container text-center col-md-3 text-white'>
            <div>
                <h6>{footer.title}</h6><br />
                <small>{footer.emergency}</small><br />
                <small>{footer.checkUp}</small><br />
                <small>{footer.treatment}</small><br />
                <small>{footer.toothExtraction}</small>
                <small>{footer.address}</small><br />
                <Link to='//facebook.com' target="_blank"><FontAwesomeIcon style={{color:'white'}} icon={footer.icon1}/></Link> <Link to='//google.com' target="_blank"><FontAwesomeIcon style={{color:'white'}} icon={footer.icon2}/></Link> <Link to='//twitter.com' target="_blank"><FontAwesomeIcon style={{color:'white'}} icon={footer.icon3}/></Link>
            </div>
            
        </div>
    );
};

export default FooterCard;