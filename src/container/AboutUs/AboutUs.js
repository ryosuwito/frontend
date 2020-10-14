import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './AboutUs.module.css';
import { p_color } from '../../constants';
import OpeningText from '../../components/OpeningText';
import { withRouter } from 'react-router-dom';

class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={classes.root}>
        <Header />

        <div className={classes.banner}>
          <img src='/images/about/2.jpeg' className={classes.img} />
          <h1 className={classes.bannerTitle}>
            Where <span style={{ color: p_color }}>experience</span> <span>meets</span>{' '}
            innovation
            <p style={{ fontSize: '16px', fontWeight: 400 }}>
              A results-driven team at the intersection of trading + technology
            </p>
          </h1>
        </div>

        <OpeningText
          text='We empower a team of exceptional individuals to identify and capture trading and
          investment opportunities globally.'
        />

        <div className={classes.body}>
          <div className={classes.history}>
            <h1 className='heading'>Our history</h1>
            <div className={classes.history_body}>
              <p className='para'>
                DRW was founded by Don Wilson, who got his start trading on the floor of the
                Chicago Mercantile Exchange in the late 1980s. Every trader on the floor had a
                three letter acronym for identification—Don chose his initials, DRW, and the
                name stuck. Over the past 25 years, DRW has expanded globally while staying
                true to what has always set us apart…our ability to identify and capture
                opportunities by leveraging technology, research and risk management.
              </p>
              <img
                src='/images/about/1.jpeg'
                style={{ maxHeight: '400px', margin: 'auto', marginTop: '23px' }}
              />
            </div>
          </div>

          <div style={{ height: '1px', background: 'gainsboro', marginTop: '70px' }}></div>

          <div className={classes.approach} id='about-approach' style={{ paddingTop: '40px' }}>
            <h1 className='heading'>Our approach</h1>
            <p className='para'>
              Trading in any asset class might include just one of these or may bring together
              all three; it all depends on what we see as the right strategy. Our knowledge of
              the markets, pricing and modeling skills, robust risk management, and application
              of technology work together to create liquidity, improve market efficiency and
              capture opportunities.
            </p>
          </div>

          <div className={classes.people}>
            <h2 className='sub-heading'>People</h2>
            <p className='para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae tellus
              rutrum leo commodo tempor. Nulla sollicitudin justo sit amet erat consequat, sit
              amet malesuada lacus vehicula. Fusce ullamcorper ultricies nulla, id gravida
              lectus lacinia tempor. Praesent consectetur viverra lacus id facilisis.
            </p>

            <div className={classes.cards}>
              <div className={classes.card}>
                <div>
                  <img src='/images/about/cb.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Cultural Background</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                <div>
                  <img src='/images/about/eb.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Educational Background</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.technology}>
            <h2 className='sub-heading'>Technology</h2>
            <p className='para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae tellus
              rutrum leo commodo tempor. Nulla sollicitudin justo sit amet erat consequat, sit
              amet malesuada lacus vehicula. Fusce ullamcorper ultricies nulla, id gravida
              lectus lacinia tempor. Praesent consectetur viverra lacus id facilisis.
            </p>

            <div className={classes.cards}>
              <div className={classes.card}>
                <div>
                  <img src='/images/about/is.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Inhouse System</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                <div>
                  <img src='/images/about/acm.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>ACM Winner Team</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                <div>
                  <img src='/images/about/tu.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Techniques used</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.trading}>
            <h2 className='sub-heading'>Trading</h2>
            <p className='para'>
              We trade for our own account in major markets across the globe. No outside
              investors. No third party funds. So we can be innovative and nimble, while using
              our market experience to prudently manage risk. We have the team and
              infrastructure in place to drive business forward without the inefficiencies that
              hold back other organizations. Not many places do things like we do, and we like
              it that way.
            </p>
            <img src='/images/about/trading.png' style={{ maxWidth: '700px' }} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(AboutUs);
