import React from 'react';
import './contact.module.css';
import classes from './contact.module.css';
import Layout from '../../layouts/layout';
import messages from '../../messages';

export default function Contact() {
  const BodyContent = props => {
    return (
      <div className={classes.body} style={{marginTop: '100px', marginBottom: '100px'}}>
        <div className={classes.cards}>
          { messages.contact.offices.map( (office, idx) => (
            <div className={ classes.card } key={ `office-${idx}` }>
              <img src={ office.backgroundImage } alt={ `${office.city}-${office.country}-${idx}` } />
              <div className={ classes.imageFilter }>
                <div className={ classes.addressDetail }>
                  <div>
                    { office.address.map( (addressDetail, _idx) => <span key={`office-${idx}-address-${_idx}`}><span>{ addressDetail }</span><br/></span>)}
                  </div>
                  <div>
                    <h3 style={{ textTransform: 'capitalize'}}><span className={ `flag-icon ${office.flagClassname}` } style={{marginRight: '5px'}}></span>{ office.country }</h3>
                  </div>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    );
  }

  return <Layout bodyContent={ <BodyContent/> } 
    bannerImage='/images/contact/0.jpg' bannerImageAlt='contact-us-banner-image'
    bannerSmallImage='/images/contact/0.jpg'
    bannerMainTitle={ <p>Get in touch</p> }
  />
}
