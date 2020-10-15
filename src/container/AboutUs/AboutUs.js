import React, { Component } from 'react';
import classes from './AboutUs.module.css';
import Layout from '../../layouts/layout';

const BodyContent = function(props) {
  return (
  <div className={classes.body}>
    <div className={classes.history} style={{marginTop: '100px'}}>
      <h1 className='heading'>Overview</h1>
      <div style={{textAlign: "justify"}}>
        <p className='para'>
          DTL operates as a licensed fund management company (LFMC)
          and is regulated by the Monetary Authority of Singapore (MAS).
          The firm trades in global financial markets and is dedicated to
          producing strong consistent returns for its investors by relying
          on mathematical and statistical models to drive its investment process.
        </p>
      </div>
    </div>

    <div style={{ height: '1px', background: 'gainsboro', marginTop: '70px' }}></div>

    <div className={classes.history}>
      <h1 className='heading'>Our history</h1>
      <div style={{textAlign: "justify"}}>
        <p className='para'>
          We've come a long way since our founding in 2009. From
          humble beginnings in a home garage, we are now a sizeable
          well-established financial institution with offices in
          Singapore and Shanghai. Our success is fuelled by some of
          the most inquisitive minds who are relentless in their
          pursuit of innovation.
        </p>
        <p className='para'>
          Today, we continue to grow at a robust pace. We are mindful
          that the road ahead will be uncertain and difficult to
          navigate. That is why we never rest on our laurels - we
          constantly question the status quo and seek new and better
          ways of doing things. We remain committed to the spirit of
          innovation that has been our hallmark since the very start
          of our existence. 
        </p>
      </div>
      <div>
        <img
          src='/images/about/history.jpg' alt='history'
          style={{ maxHeight: '400px', objectFit: "scale-down", margin: 'auto', marginTop: '23px' }}
        />
      </div>
    </div>

    <div style={{ height: '1px', background: 'gainsboro', marginTop: '70px' }}></div>

    <div className={classes.approach} id='about-approach' style={{ paddingTop: '40px' }}>
      <h1 className='heading'>Our approach</h1>
      <p className='para' style={{textAlign: "justify"}}>
        At DTL, we believe the whole is greater than the sum of its parts. 
        The collective intelligence and differentiated insights of people working together 
        sparks novel and unorthodox solutions. We foster a collaborative environment that 
        enables our people to work through ideas, build on each other’s knowledge, and uncover new investment opportunities. 
      </p>
    </div>

    <div className={classes.people}>
      <h2 className='sub-heading'>People</h2>
      <p className='para' style={{textAlign: "justify"}}>
        In today’s increasingly complex marketplace, we face challenges that span different domains of knowledge and expertise. 
        For this reason, we bring together people with different skills, backgrounds and experiences. 
        Diversity is our differentiating strength that takes us further.
      </p>

      <div className={classes.cards}>
        <div className={classes.card}>
          <div>
            <img src='/images/about/cb.png' alt='globe'/>
          </div>
          <div className={classes.card_body}>
            <h4>Cultural Background</h4>
            <p className='para'>
              Our team is made up of people from different nationalities and cultural backgrounds.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div>
            <img src='/images/about/eb.png' alt='education'/>
          </div>
          <div className={classes.card_body}>
            <h4>Educational Background</h4>
            <p className='para'>
              We hire exceptional people from a variety of disciplines such as computer science, mathematics, finance, economics, and engineering.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className={classes.technology}>
      <h2 className='sub-heading'>Technology</h2>
      <p className='para' style={{textAlign: "justify"}}>
        For over a decade, DTL has remained at the forefront of quantitative investing, 
        thanks to our deep expertise in technology. We focus on maintaining and developing strong infrastructure. 
      </p>

      <div className={classes.cards}>
        <div className={classes.card}>
          <div>
            <img src='/images/about/is.png' alt='proprietary_systems'/>
          </div>
          <div className={classes.card_body}>
            <h4>Proprietary systems</h4>
            <p className='para'>
              We design and build our own technology infrastructure such as Order Management System (OMS) and risk monitoring tools.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div>
            <img src='/images/about/acm.png' alt='worldclass_team'/>
          </div>
          <div className={classes.card_body}>
            <h4>World-class team</h4>
            <p className='para'>
              We hire extraordinarily brilliant people, including IMO, IOI medallists, and ACM-ICPC world finalists.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div>
            <img src='/images/about/tu.png' alt='artificial_intelligence'/>
          </div>
          <div className={classes.card_body}>
            <h4>Artificial intelligence</h4>
            <p className='para'>
              We leverage advanced techniques like machine learning and other new technologies in our investment decision-making process.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.trading}>
      <h2 className='sub-heading'>Trading</h2>
      <p className='para' style={{textAlign: "justify"}}>
        We invest across regions, industries and asset classes. 
        We trade on more than 50 exchanges worldwide including the United States, Canada, Germany, United Kingdom, Australia, Japan, etc.
      </p>
      <img src='/images/about/trading.png' style={{ maxWidth: '700px' }} alt='trading'/>
    </div>
  </div>)
}

class AboutUs extends Component {

  render() {
    return <Layout bodyContent={ <BodyContent/> }
      bannerImage={ '/images/about/0.jpg' } bannerImageAlt='about-us-banner-image'
      bannerSmallImage={ '/images/about/0.jpg' }
      bannerMainTitle={ <p>Housing <i>diverse</i> perspectives</p>}
      bannerSubTitle={ <p>Our diverse blend of skills, perspectives and expertise sets us apart.</p>}
    />
  }
}

export default AboutUs;
