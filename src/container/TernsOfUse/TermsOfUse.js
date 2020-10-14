import React, { useEffect } from 'react';
import classes from './index.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { p_color } from '../../constants';
import OpeningText from '../../components/OpeningText';
import { Link } from 'react-router-dom';

export const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={classes.root}>
        <Header />

        <div className={classes.openingText}>
          <OpeningText text='TERMS OF USE' />
        </div>

        <div className={classes.body}>
          <p className='para' style={{ marginBottom: '50px' }}>
            This website,{' '}
            <Link to='/' style={{ color: p_color }}>
              https://drw.com
            </Link>{' '}
            (this “Site”), and all contents and materials herein (the “Site Contents”), are
            copyrighted under the laws of the United States of America and are protected by
            copyright laws and treaty provisions throughout the world. You may not copy,
            distribute, transmit, modify, frame, post or link this Site or the Site Contents
            without prior written consent of DRW Holdings, LLC (“DRW”), as described below. You
            may download the Site Contents for personal and non-commercial use, provided that
            you do not modify or alter such Site Contents in any way, nor delete or change any
            copyright or trademark notice indicated on this Site. DRW reserves and maintains
            complete title and full intellectual property rights for Site Contents downloaded
            from this Site, and no such title or intellectual property rights shall vest or be
            transferred in any way to you. All trademarks, logos, service marks, trade dress,
            slogans, copyrighted designs or other brand features of DRW or its affiliated
            entities are owned by DRW and may only be used pursuant to an explicit license
            agreement with DRW. No Site Content or any part thereof may be modified,
            reverse-engineered, reproduced or distributed in any form by any means, or stored
            in a database or retrieval system, without the prior written consent of DRW. You
            may not use the Site Content for any unlawful or unauthorized purposes.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};
