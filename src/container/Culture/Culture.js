import React from 'react';
import classes from './culture.module.css';
import Layout from '../../layouts/layout';

import messages from '../../messages';


const BodyContent = function(props) {
  return (
    <div className={classes.body} style={{marginTop: '100px', marginBottom: '100px'}}>
      <div className={classes.values}>
        <h1 className='heading'>Our Culture</h1>
        <p className='para'>
          Our culture is highly collaborative and non-hierarchical. 
          Our employees enjoy a high degree of autonomy to lead change and pursue unconventional ideas. 
          We remain agile and opportunistic in the face of challenging market conditions.
        </p>
      </div>

      <div style={{ height: '1px', background: 'gainsboro'}}></div>

      <div className={classes.values}>
        <h1 className='heading'>Our Values</h1>
        <div className={ classes.cards }>
          { messages.culture.ourValues.blocks.map( (block, idx) => (
            <div className={ classes.card } key={ `block-${idx}`} >
              <div className={ classes.leftImage }>
                <img src={ block.img } alt={ block.imgAlt }/>
              </div>
              <div className={ classes.card_body }>
                <h4>{ block.title }</h4>
                <p className='para'>
                  { block.paragraph }
                </p>
              </div>
            </div>))}
          </div>
      </div>

      <div>
        <h1 className={classes.fun_heading}>
          At DTL, we believe in work-life harmony. We encourage our employees to have fun outside of work.
        </h1>
        <div className={classes.fun}>
          <div className={`${classes.fun_card} ${classes.fun_card1}`}>
            <img src='/images/culture/1.jpg' alt='movie_night_img' />
            <div className={classes.fun_card_title}>Movie Night</div>
          </div>

          <div className={`${classes.fun_card} ${classes.fun_card2}`}>
            <img src='/images/culture/2.jpg' alt='pantry_food_img' />
            <div className={classes.fun_card_title}>pantry</div>
          </div>

          <div className={`${classes.fun_card} ${classes.fun_card3}`}>
            <img src='/images/culture/3.jpg' alt='gym_img' />
            <div className={classes.fun_card_title}>gym</div>
          </div>

          <div className={`${classes.fun_card} ${classes.fun_card4}`}>
            <img src='/images/culture/4.jpg' alt='friday_snack_img' />
            <div className={classes.fun_card_title}>friday snack</div>
          </div>

          <div className={`${classes.fun_card} ${classes.fun_card5}`}>
            <img src='/images/culture/5.jpg' alt='poker_img' />
            <div className={classes.fun_card_title}>Game/poker</div>
          </div>

          <div className={`${classes.fun_card} ${classes.fun_card6}`}>
            <img src='/images/culture/6.jpg' alt='outing_img' />
            <div className={classes.fun_card_title}>outing</div>
          </div>

          <div className={`${classes.fun_card} ${classes.fun_card7}`}>
            <img src='/images/culture/7.jpg' alt='bbq_img' />
            <div className={classes.fun_card_title}>Marathon</div>
          </div>

          <div className={`${classes.fun_card} ${classes.fun_card8}`}>
            <img src='/images/culture/8.jpg' alt='annual_treats_img' />
            <div className={classes.fun_card_title}>annual treats</div>
          </div>

          <div className={`${classes.fun_card} ${classes.fun_card9}`}>
            <img src='/images/culture/9.jpg' alt='recreation' />
            <div className={classes.fun_card_title}>recreation</div>
          </div>
        </div>
      </div>
  </div>)
}

export default function Culture() {
  return <Layout bodyContent={ <BodyContent /> }
    bannerImage='/images/culture/0.jpg' bannerImageAlt='culture-banner-image'
    bannerSmallImage='/images/culture/0.jpg'
    bannerMainTitle={ <p>Where people can <i>grow</i> and <i>thrive</i></p> }
    bannerSubTitle={ <p>We build a culture conducive to creativity and innovation.</p> }
  />
}
