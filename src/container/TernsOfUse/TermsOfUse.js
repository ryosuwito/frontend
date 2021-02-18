import React, { useEffect } from 'react';
import classes from './index.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={classes.root}>
        <Header />

        <div className={classes.openingText} style={{textAlign: "center"}}>
          <h3 style={{fontSize: '3rem', fontFamily: 'serif', marginTop: '250px'}}>Terms of Use</h3>
        </div>

        <div className={classes.body}>
          <h3>Agreement - Terms</h3>
          <p className='para' style={{ marginBottom: '50px' }}>
            All access to any area on our websites at Dynamic Technology Lab Pte Ltd (“DTL”) are governed by the terms and conditions below ("Terms"). If you are not comfortable with any of these Terms, we would advise you to exit. Please continue only if you can accept these Terms. In these Terms, the words "we", "our" and "us" refers to DTL.
          </p>
        </div>

        <div className={classes.body}>
          <h3>Access to the Website</h3>
          <p className='para' style={{ marginBottom: '50px'}}>
            The accessibility and operation of our website relies on technologies outside our control. We are not able to guarantee continuous accessibility or uninterrupted operation of our website.
          </p>
        </div>

        <div className={classes.body}>
          <h3>Relying on Information</h3>
          <p className='para' style={{ marginBottom: '50px'}}>
We provide our website as a general information source only. Do note that we are not involved in giving professional advice here. The website may not cover all information available on a particular issue. We would advise that you conduct your own checks or obtain professional advice relevant to your particular circumstances, outside of our website.
          </p>
        </div>

        <div className={classes.body}>
          <h3>Security</h3>
          <p className='para' style={{ marginBottom: '50px'}}>
Where appropriate, we use available technology to protect the security of communications made through our website. Do note that we do not accept liability for the security, authenticity, integrity or confidentiality of any transactions and other communications made through our website. Internet communications may be susceptible to interference or interception by third parties. We will do our best but we cannot make any warranties that our website is free of infection by computer viruses or other unauthorised software.
          </p>
        </div>

        <div className={classes.body}>
          <h3>Hyperlinks</h3>
          <p className='para' style={{ marginBottom: '50px'}}>
We are not responsible or liable for the availability or content of any other Internet site (not provided by us) linked to or from our website. Access to any other Internet site is at your own risk. If you create a link or frame to our website, you do so at your own risk. We reserve the right to object or disable any link or frame to or from our website.
          </p>
        </div>

        <div className={classes.body}>
          <h3>Restrictions on Use of Materials</h3>
          <p className='para'>
No material from this web site shall be reproduced, republished, uploaded, posted, transmitted or otherwise distributed in any way without the prior written consent of DTL. Graphics and images on this web site, including the DTL logo and related images, are protected by copyright and may not be reproduced or appropriated in any manner without prior written consent.
          </p>
          <p className='para'>
Modification of any of the materials or use of any of the materials for any other purpose will be a violation of DTL’s copyright and other intellectual property rights.
          </p>
          <p className='para' style={{ marginBottom: '50px'}}>
The downloading of any software, including any files, images and data accompanying the software (hereinafter called "the software") from the web site by you does not in any way transfer title of the software to you. You may not redistribute, sell, de-compile, reverse-engineer or disassemble or otherwise deal with the software nor create derivative works from this web site or the materials thereon. Any unauthorized use of the web site or the materials thereon is strictly prohibited. 
          </p>
        </div>

        <div className={classes.body}>
          <h3>Third Party Content</h3>
          <p className='para' style={{ marginBottom: '50px'}}>
Third party content may appear on the web site or may be accessible via links from the web site. DTL shall not be responsible and assumes no liability for any infringement, mistakes, misstatements of law, defamation, libel, slander, omissions, falsehood or profanity in the statements, opinions, representations or any other form of content contained in any third party content appearing on the web site. 
          </p>
        </div>

        <div className={classes.body}>
          <h3>Non-confidentiality</h3>
          <p className='para' style={{ marginBottom: '50px'}}>
You agree that all information and/or particulars sent or submitted by you to DTL in relation to the access of this web site is non-confidential and non-proprietary unless otherwise expressly indicated by you. You further undertake not to submit any information and/or other materials which are or may be offensive, illegal or which may not be lawfully disseminated under the laws of Singapore or any other relevant country.
          </p>
        </div>

        <div className={classes.body}>
          <h3>Modification to Terms and Conditions of Use</h3>
          <p className='para' style={{ marginBottom: '50px'}}>
he Terms and Conditions set out here may be edited from time to time. Updated versions of the Terms and Conditions of Use will be posted on the web site and are effective immediately. 
          </p>
        </div>

        <div className={classes.body}>
          <h3>Registration on Web Site and e-Services Web Sites</h3>
          <p className='para'>
          Information collected from our users may be used for various reasons.
          </p>
          <p className='para' style={{ marginBottom: '50px'}}>
          We are committed to safeguarding your privacy. We do not disclose specific information about our users to any third parties unless so required by law or any government agencies. In the event that you participate in contests or other promotional programs on our site sponsored or organized by third parties or purchase goods and services offered by third parties or offer goods and services to third parties on our sites, your information may be disclosed to and used by such third parties. 
          </p>
        </div>

       <Footer />
      </div>
    </>
  );
};
