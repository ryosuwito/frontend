import React, { useEffect, useState } from 'react';
import classes from './index.module.css';
import { content } from '../../fixtures/careers';
import uniquid from 'uniqid';
import Layout from '../../layouts/layout';

const jobs = content.jobs.map(job => {
  job.urls = [];
  job.urls = job.location.map(l => {
    const paramStr = [
      'position=' + encodeURIComponent(job.symbol),
      'typ=' + encodeURIComponent(job.type_symbol),
      'workplace=' + encodeURIComponent(l.toUpperCase()),
    ].join('&')
    return [l, '/dtlweb/careers?' + paramStr];
  })

  return job;
});


jobs.map((job) => (job.id = uniquid()));


export default function Career() {
  const [availableJobs, setAvailableJobs] = useState(jobs);
  const [type, setType] = useState(content.categories.types[2]);
  const [currJobId, setCurrJobId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateJobs = () => {
    let res = jobs;

    // Filter types
    if (type.value !== 'All') {
      res = res.filter((job) => job.type === type.value);
    }
    if (res.length === 0) {
      setCurrJobId(null);
    }

    setAvailableJobs(res);
  };

  const toggleDetailsView = (id) => {
    if (currJobId !== id) {
      setCurrJobId(id);
    }
  };

  useEffect(() => {
    updateJobs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    window.screen.width > 900 && setCurrJobId(availableJobs[0]?.id);
  }, [availableJobs]);

  useEffect(() => {
    if (window.screen.width > 900) {
      availableJobs.forEach((job) => {
        let el = document.getElementById(`id${job.id}`);
        el.style.background = 'white';
      });
      let el = document.getElementById(`id${currJobId}`);
      if (el) {
        el.style.background = 'rgb(164, 214, 232, 0.6)';
      }
    }

    let details_container = document.getElementById('sticky-scroll');
    if (details_container) details_container.scrollTo(0, 0); // Take user to starting when job is changed
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const selectedEls = document.getElementsByClassName(classes.selectedJob);
    for(let i = 0; i < selectedEls.length; i++) {
      selectedEls[i].classList.remove(classes.selectedJob);
    }
    const jobElement = document.getElementById(`job_${currJobId}_id`);
    if (jobElement) {
      jobElement.classList.add(classes.selectedJob)
    }
  }, [currJobId, availableJobs]);

  const onClickFilter = (selectedType) => {
    return evt => {
      const els = document.getElementsByClassName(classes.filterButton);
      for(let i = 0; i < els.length;i++) {
        els[i].classList.remove(classes.filterButtonActive);
      }
      evt.currentTarget.classList.add(classes.filterButtonActive);
      setType(selectedType);
    }
  }

  const typeCount = {};
  jobs.forEach(job => {
    if (typeCount.hasOwnProperty(job.type)) {
      typeCount[job.type]++;
    } else {
      typeCount[job.type] = 1;
    }
  })
  const contentTypes = content.categories.types;

  const BodyContent = props => {
    return (
      <div className={classes.body} style={{marginTop: '100px', marginBottom: '100px'}}>
      <div className={classes.careers}>

        {/* <h1 className='heading' style={{textAlign: 'center', marginBottom: '70px'}}>We are hiring</h1> */}

        <div className={ classes.filterButtonGroup }>
          <div className={ [classes.filterButton, classes.filterButtonActive].join(' ') }
            onClick={ onClickFilter(contentTypes[2]) }>{ contentTypes[2].label }{' '}
              <span className={`${classes.badge} ${classes.badgeFilterButton}`}>{typeCount[contentTypes[2].value]}</span>
          </div>
          <div className={ classes.filterButton }
            onClick={ onClickFilter(contentTypes[1])}>{ contentTypes[1].label }{' '}
              <span className={`${classes.badge} ${classes.badgeFilterButton}`}>{typeCount[contentTypes[1].value]}</span>
          </div>
        </div>

        <div className={classes.careers_body}>

          <div className={classes.container}>
          {/* <div className="col col-3"> */}
            <div className={ classes.listing }>
              {availableJobs.map((job) => (
                <div onClick={() => toggleDetailsView(job.id)} key={`jobTitleKey${job.id}`}>
                  <div className={classes.job_card} id={`id${job.id}`} key={job.id}>
                    <h3 className={`heading ${classes.d_heading}`}>
                      {job.name}
                    </h3>

                    <div className={classes.job_card_body}>
                      <div className={classes.job_location}>
                      <div style={{marginTop: '5px'}}>
                      Location: { job.location.join(', ') }</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              </div>
            <div className={classes.container_right}>

              

              {jobs.map(job => {
                return (
                <div id={`job_${job.id}_id`}key={`job_${job.id}`} style={{ top: '120px', display: 'none' }}>
                  <div id='sticky-scroll'
                    style={{ paddingRight: '20px', paddingLeft: '13px', }} >

                    <h2>{job.name}</h2>
                    <br></br>

                    <h3>Locations</h3>
                    <table>
                      <tbody>
                        { job.urls.map(url => (
                        <tr key={`apply_link_${url[0]}`} style={{ fontSize: '1rem'}}>
                          <td style={{ margin: '10px', padding: '10px'}}>{ url[0] }</td>
                          <td style={{ margin: '10px', padding: '10px'}}>
                            <a className='btn btn-primary' href={ url[1] } target='_blank' rel="noopener noreferrer">Apply Now</a>
                          </td>
                        </tr>))}
                      </tbody>
                    </table>
                    <br></br>

                    { job.description.length > 0 && (<>
                    <h3>Job Description</h3>
                    { job.description.map ((desc, i) =>(
                    <p className='para' style={{ lineHeight: '1.4', fontSize: '1rem', }} key={ i } >
                      {desc}
                    </p>))}
                    <br></br>
                    </>)}

                    { job.responsibilities.length > 0 && (<>
                    <h3>Job Responsibilities</h3>
                    <div>
                      {job.responsibilities.map((resp, i) => (
                        <p className='para' style={{ lineHeight: '1.4', fontSize: '1rem', }} key={i} >
                          <span className={classes.dot}></span>
                          {resp}
                        </p>
                      ))}
                    </div><br></br></>) }

                    { job.qualifications.length > 0 && (<>
                    <h3>Qualifications</h3>
                    <div>
                      {job.qualifications.map((qual, i) => (
                        <p className='para' key={i} style={{ lineHeight: '1.4', fontSize: '1rem', }} >
                          <span className={classes.dot}></span>
                          {qual}
                        </p>
                      ))}
                    </div><br></br></>) }

                    { job.pluses.length > 0 && (<>
                    <h3>Pluses</h3>
                    <div style={{ marginBottom: '20px' }}>
                      {job.pluses.map((plus, i) => (
                        <p className='para' key={i} style={{ lineHeight: '1.4', fontSize: '1rem', }} >
                          <span className={classes.dot}></span>
                          {plus}
                        </p>
                      ))}
                    </div><br></br></>)}
                    
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

  return <Layout bodyContent={ <BodyContent/> } 
    bannerImage='/images/career/0.jpg' bannerImageAlt='career-banner-image'
    bannerSmallImage='/images/career/0.jpg'
    bannerMainTitle={ <p>Work with us</p> }
    bannerSubTitle={ <p>We offer opportunities for our people to realise their full potential.</p> }
  />
}
