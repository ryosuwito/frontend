import React, { useEffect, useState } from 'react';
import classes from './index.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import OpeningText from '../../components/OpeningText';
import { p_color, jobs, s_color } from '../../constants';
import Select from 'react-select';
import uniquid from 'uniqid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const locations = [
  { value: 'All', label: 'All' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Shanghai', label: 'Shanghai' },
];

const departments = [
  { value: 'All', label: 'All' },
  { value: 'Trading', label: 'Trading' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Corporate Functions', label: 'Corporate Functions' },
];

const types = [
  { value: 'All', label: 'All' },
  { value: 'Intern', label: 'Intern' },
  { value: 'Full Time', label: 'Full Time' },
];

const selectStyles = {
  control: (styles) => ({ ...styles, minWidth: '200px' }),
  option: (styles) => {
    return {
      ...styles,
    };
  },
};

jobs.map((job) => (job.id = uniquid()));

export default function Career() {
  const [availableJobs, setAvailableJobs] = useState(jobs);
  const [location, setLocation] = useState({ value: 'All', label: 'Select Location...' });
  const [type, setType] = useState({ value: 'All', label: 'Select Type...' });
  const [currJobId, setCurrJobId] = useState(null);
  const currJob = currJobId && jobs[jobs.findIndex((job) => job.id === currJobId)];

  const [department, setDepartment] = useState({
    value: 'All',
    label: 'Select Department...',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateJobs = () => {
    let res = jobs;

    // Filter locations
    if (location.value !== 'All') {
      res = jobs.filter((job) => job.location === location.value);
      setAvailableJobs(res);
    }

    // Filter departments
    if (department.value !== 'All') {
      res = res.filter((job) => job.department === department.value);
    }

    // Filter types
    if (type.value !== 'All') {
      res = res.filter((job) => job.type === type.value);
    }
    if (res.length === 0) {
      setCurrJobId(null);
    }

    setAvailableJobs(res);
  };

  const handleLocationChange = (e) => {
    setLocation(e);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e);
  };

  const handleTypeChange = (e) => {
    setType(e);
  };

  const toggleDetailsView = (id) => {
    if (currJobId !== id) {
      setCurrJobId(id);
    } else {
      setCurrJobId(null);
    }
  };

  useEffect(() => {
    AOS.init();
    updateJobs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, department, type]);

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
        el.style.background = 'rgb(167, 221, 242, 0.4)';
      }
    }

    let details_container = document.getElementById('sticky-scroll');
    if (details_container) details_container.scrollTo(0, 0); // Take user to starting when job is changed

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currJobId]);

  return (
    <>
      <div className={classes.root}>
        <Header />

        <div className={classes.banner}>
          <img src='/images/about/2.jpeg' alt='banner' className={classes.img} />
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
          <div className={classes.careers}>
            <h1 className='heading'>Open Positions</h1>

            <div className={classes.careers_body}>
              <div className={classes.filters}>
                <div className={classes.location_filter}>
                  <Select
                    value={location}
                    onChange={handleLocationChange}
                    options={locations}
                    styles={selectStyles}
                  />
                </div>

                <div className={classes.department_filter}>
                  <Select
                    value={department}
                    onChange={handleDepartmentChange}
                    options={departments}
                    styles={selectStyles}
                  />
                </div>

                <div className={classes.type_filter}>
                  <Select
                    value={type}
                    onChange={handleTypeChange}
                    options={types}
                    styles={selectStyles}
                  />
                </div>
              </div>

              {availableJobs.length === 0 ? (
                <h2 className='heading'>No Jobs for this filter.</h2>
              ) : (
                <h5>{availableJobs.length} Jobs found</h5>
              )}
              <div className={classes.container}>
                <div className={classes.listing}>
                  {availableJobs.map((job) => (
                    <div className={classes.job_card} id={`id${job.id}`} key={job.id}>
                      <h2 className={`heading ${classes.m_heading}`}>{job.name}</h2>
                      <h2
                        className={`heading ${classes.d_heading}`}
                        onClick={() => toggleDetailsView(job.id)}
                      >
                        {job.name}
                      </h2>

                      <div className={classes.job_card_body}>
                        <div className={classes.job_card_body_left}>
                          <div className={classes.job_location}>Location: {job.location}</div>

                          <div className={classes.job_department}>
                            Department: {job.department}
                          </div>

                          <div className={classes.job_type}>Type: {job.type}</div>
                        </div>
                        <div className={classes.job_card_body_right}>
                          <button className='btn'>Apply Now</button>
                        </div>
                      </div>

                      <h5
                        style={{ color: s_color }}
                        onClick={() => toggleDetailsView(job.id)}
                        className={classes.see_more}
                      >
                        {currJobId === job.id ? 'See Less' : 'See More'}
                      </h5>

                      <div
                        className={classes.job_details_container}
                        style={{ lineHeight: '1.5rem' }}
                      >
                        {currJobId === job.id ? (
                          <div
                            className={classes.job_details}
                            id={job.id}
                            data-aos='fade-down'
                          >
                            <h4 className='heading'>Job Description</h4>

                            <div
                              style={{
                                textAlign: 'justify',
                                whiteSpace: 'break-spaces',
                              }}
                            >
                              {job.description}
                            </div>

                            <h4 className='heading'>Job Responsibilities</h4>

                            <div>
                              {job.responsibilities.map((resp, i) => (
                                <div
                                  key={i}
                                  style={{
                                    textAlign: 'justify',
                                    whiteSpace: 'break-spaces',
                                  }}
                                >
                                  <span className={classes.dot}></span>
                                  {resp}
                                </div>
                              ))}
                            </div>

                            <h4 className='heading'>Qualifications</h4>

                            <div>
                              {job.qualifications.map((qual, i) => (
                                <div
                                  key={i}
                                  style={{
                                    textAlign: 'justify',
                                    whiteSpace: 'break-spaces',
                                  }}
                                >
                                  <span className={classes.dot}></span>
                                  {qual}
                                </div>
                              ))}
                            </div>

                            <h4 className='heading'>Pluses</h4>

                            <div>
                              {job.pluses.map((plus, i) => (
                                <div
                                  key={i}
                                  style={{
                                    textAlign: 'justify',
                                    whiteSpace: 'break-spaces',
                                  }}
                                >
                                  <span className={classes.dot}></span>
                                  {plus}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={classes.container_right}>
                  {!currJob ? null : (
                    <div
                      style={{
                        position: 'sticky',
                        top: '120px',
                      }}
                    >
                      <div
                        id='sticky-scroll'
                        style={{
                          paddingRight: '20px',
                          paddingLeft: '13px',
                        }}
                      >
                        <h2>{currJob.name}</h2>
                        <h3>Job Description</h3>

                        <p
                          className='para'
                          style={{
                            lineHeight: '1.4',
                            fontSize: '1rem',
                          }}
                        >
                          {currJob.description}
                        </p>

                        <h3>Job Responsibilities</h3>

                        <div>
                          {currJob.responsibilities.map((resp, i) => (
                            <p
                              className='para'
                              style={{
                                lineHeight: '1.4',
                                fontSize: '1rem',
                              }}
                              key={i}
                            >
                              <span className={classes.dot}></span>
                              {resp}
                            </p>
                          ))}
                        </div>

                        <h3>Qualifications</h3>

                        <div>
                          {currJob.qualifications.map((qual, i) => (
                            <p
                              className='para'
                              key={i}
                              style={{
                                lineHeight: '1.4',
                                fontSize: '1rem',
                              }}
                            >
                              <span className={classes.dot}></span>
                              {qual}
                            </p>
                          ))}
                        </div>

                        <h3>Pluses</h3>

                        <div style={{ marginBottom: '20px' }}>
                          {currJob.pluses.map((plus, i) => (
                            <p
                              className='para'
                              key={i}
                              style={{
                                lineHeight: '1.4',
                                fontSize: '1rem',
                              }}
                            >
                              <span className={classes.dot}></span>
                              {plus}
                            </p>
                          ))}
                        </div>

                        <button className='btn'>Apply Now</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
