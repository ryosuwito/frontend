import React, { useState, useEffect } from 'react';
import './contact.module.css';
import classes from './contact.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { p_color } from '../../constants';
import OpeningText from '../../components/OpeningText';

export default function Contact() {
  const [singapore, setSingapore] = useState(false);
  const [shanghai, setShanghai] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let el = document.getElementById('address1');
    let plus = document.getElementById('plus1');
    let singapore_card = document.getElementsByClassName(classes.card)[0];
    if (singapore) {
      singapore_card.classList.add(classes.backdrop);
      el.style.height = '65px';
      plus.style.transform = 'rotate(180deg)';
    } else {
      singapore_card.classList.remove(classes.backdrop);
      plus.style.transform = 'rotate(0)';
      el.style.height = 0;
    }
  }, [singapore]);

  useEffect(() => {
    let el = document.getElementById('address2');
    let plus = document.getElementById('plus2');
    let shanghai_card = document.getElementsByClassName(classes.card)[1];
    if (shanghai) {
      shanghai_card.classList.add(classes.backdrop);
      el.style.height = '65px';
      plus.style.transform = 'rotate(180deg)';
    } else {
      shanghai_card.classList.remove(classes.backdrop);
      plus.style.transform = 'rotate(0)';
      el.style.height = 0;
    }
  }, [shanghai]);

  return (
    <>
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

        <OpeningText text='We have two offices right now.' />

        <div className={classes.body}>
          <div className={classes.cards}>
            <div className={classes.card} onClick={() => setSingapore(!singapore)}>
              <img src='https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
              <div className={classes.text}>
                Singapore
                <div id='address1' className={classes.address}>
                  Line1 <br />
                  Line2 <br />
                  Line3
                </div>
              </div>
              <div className={`${classes.toggle}`}>
                <div id='plus1'>^</div>
              </div>
            </div>

            <div className={classes.card} onClick={() => setShanghai(!shanghai)}>
              <img src='https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
              <div className={classes.text}>
                Shanghai
                <div id='address2' className={classes.address}>
                  Line1 <br />
                  Line2 <br />
                  Line3
                </div>
              </div>
              <div className={`${classes.toggle}`}>
                <div id='plus2'>^</div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
