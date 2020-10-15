import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './container/Home/home';
import AboutUs from './container/AboutUs/AboutUs';
import Culture from './container/Culture/Culture';
import Career from './container/Careers/Career';
import Contact from './container/Contact/Contact';
import { TermsOfUse } from './container/TernsOfUse/TermsOfUse';
import routines from './routines';

function App() {
  return (
    <div className='App'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css" integrity="sha512-Cv93isQdFwaKBV+Z4X8kaVBYWHST58Xb/jVOcV9aRsGSArZsgAnFIhMpDoMDcFNoUtday1hdjn0nGp3+KZyyFw==" crossorigin="anonymous" />
      <Switch>
        <Route path={ routines.home.url } exact component={Home} />
        <Route path={ routines.about.url } component={AboutUs} />
        <Route path={ routines.culture.url } component={Culture} />
        <Route path={ routines.career.url } component={Career} />
        <Route path={ routines.contact.url } component={Contact} />
        <Route path={ routines.terms_of_use.url } component={TermsOfUse} />
      </Switch>
    </div>
  );
}

export default App;
