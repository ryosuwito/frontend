import React, { useEffect } from 'react';
import classes from './culture.module.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { p_color } from '../../constants';
import OpeningText from '../../components/OpeningText';

export default function Culture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

        <OpeningText
          text='We empower a team of exceptional individuals to identify and capture trading and
          investment opportunities globally.'
        />

        <div className={classes.body}>
          <div className={classes.values}>
            <h1 className='heading'>Our Values</h1>
            <div className={classes.cards}>
              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/teamwork.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Teamwork</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/meritocracy.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Meritocracy</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/integrity.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Integrity</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.cards}>
              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/learning.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Learning</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/agility.png' />
                </div>
                <div className={classes.card_body}>
                  <h4>Agility</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>

              <div className={classes.card}>
                {/* <span className={`material-icons ${classes.icons}`}>school</span> */}
                <div>
                  <img src='/images/culture/winning.png' alt='winning_img' />
                </div>
                <div className={classes.card_body}>
                  <h4>Winning</h4>
                  <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className={classes.fun_heading}>
              At DRW, we do more than work together. We support and learn from each other
              throughout our careers.
            </h1>
            <div className={classes.fun}>
              <div className={`${classes.fun_card} ${classes.fun_card1}`}>
                <img alt='' src='/images/about/1.jpeg' alt='movie_night_img' />
                <div className={classes.fun_card_title}>Movie Night</div>
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card2}`}>
                <img alt='' src='/images/about/1.jpeg' alt='pantry_food_img' />
                <div className={classes.fun_card_title}>pantry food</div>
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card3}`}>
                <img alt='' src='/images/about/1.jpeg' alt='gym_img' />
                <div className={classes.fun_card_title}>gym</div>
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card4}`}>
                <img alt='' src='/images/about/1.jpeg' alt='friday_snack_img' />
                <div className={classes.fun_card_title}>friday snack</div>
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card5}`}>
                <img alt='' src='/images/about/1.jpeg' alt='game_img' />
                <div className={classes.fun_card_title}>Game/poker</div>
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card6}`}>
                <img alt='' src='/images/about/1.jpeg' alt='jogging_img' />
                <div className={classes.fun_card_title}>jogging</div>
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card7}`}>
                <img alt='' src='/images/about/1.jpeg' alt='bbq_img' />
                <div className={classes.fun_card_title}>bbq/outing</div>
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card8}`}>
                <img alt='' src='/images/about/1.jpeg' alt='annual_treats_img' />
                <div className={classes.fun_card_title}>annual treats</div>
              </div>

              <div className={`${classes.fun_card} ${classes.fun_card9}`}>
                <img alt='' src='/images/about/1.jpeg' alt='marathon' />
                <div className={classes.fun_card_title}>Marathon</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
