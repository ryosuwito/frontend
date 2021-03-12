import React, { useEffect, useState } from 'react';
import classes from './index.module.css';
import uniquid from 'uniqid';
import Layout from '../../layouts/layout';

import routines from '../../routines';

function useFetchOpenJob() {
  const [fetching, setFetching] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setFetching(true);
      try {
        const res = await fetch(routines.career.api.careerData.url);
        if (199 < res.status && res.status < 300) {
          setResponse(await res.json());
        } else {
          console.error(res.status);
          console.error(await res.text());
          throw new Error(res);
        }
      } catch(err) {
        console.error(err);
        setError(err);
      } finally {
        setFetching(false);
      }
    })();
  }, [])

  return [fetching, response, error]
}

export default function Career() {
  const [jobs, setJobs] = useState([])
  const [positions, setPositions] = useState({});
  const [types, setTypes] = useState({});
  const [workplaces, setWorkplaces] = useState({});
  // selectedType is a job filter that filter jobs by type
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  // selectedJobID
  const [currJobId, setCurrJobId] = useState(null);
  const [fetching, res, err] = useFetchOpenJob();
  const [typeCount, setTypeCount] = useState({});

  useEffect(() => {
    if (fetching === false && (res !== null || err !== null)) {
      if (res !== null) {
        const data = (res.open_jobs || []).map(job => {
          job.jd = JSON.parse(job.description);
          job.urls = (job.workplace).split(',').map(l => {
            l = l.trim();
            const paramStr = [
              'position=' + encodeURIComponent(job.position),
              'typ=' + encodeURIComponent(job.typ),
              'workplace=' + encodeURIComponent(l),
            ].join('&')
            return [l, routines.career.onlineApplication.url + '?' + paramStr];
          })
          return job;
        });
        setJobs(data);
        setPositions(res.positions);
        setWorkplaces(res.workplaces);
        let metaData = res.meta_data;
        // type_order meta data
        if (metaData?.type_order !== undefined && metaData.type_order.length > 0) {
          const types = res.types;
          let newTypes = {};
          metaData.type_order.forEach( typeName => {
            if (types.hasOwnProperty(typeName)) {
              newTypes[typeName] = types[typeName];
            }
          })
          Object.entries(types).forEach(([name, value]) => {
            if (!newTypes.hasOwnProperty(name)) {
              newTypes[name] = value;
            }
          })
          setTypes(newTypes);
        } else {
          setTypes(res.types);
        }
      }
    }
  }, [fetching, res, err])

  useEffect(() => {
    if (selectedType === null && Object.entries(types).length > 0) {
      setSelectedType(Object.entries(types)[0][0]);
    }
  }, [types, selectedType])

  useEffect(() => {
    let _selectedJobs = jobs.filter((job) => job.typ === selectedType);
    setSelectedJobs(_selectedJobs);
  }, [selectedType]);

  useEffect(() => {
    setCurrJobId(selectedJobs[0]?.id);
  }, [selectedJobs]);

  useEffect(() => {
    let typeCount = {};
    jobs.forEach(job => {
      if (typeCount.hasOwnProperty(job.typ)) {
        typeCount[job.typ]++;
      } else {
        typeCount[job.typ] = 1;
      }
    })
    setTypeCount(typeCount);
  }, [jobs])

  const onSelectJob = (id) => {
    if (currJobId !== id) {
      setCurrJobId(id);
    }
  };

  const onClickFilter = (selectedType) => {
    return () => {
      setSelectedType(selectedType);
    }
  }

  const BodyContent = props => {
    return (
      <div className={classes.body} style={{marginTop: '100px', marginBottom: '100px'}}>
      <div className={classes.careers}>

        <div className={classes.careers_body}>
          <div className={ classes.filterButtonGroup }>
            { Object.entries(types).map(([name, label]) => (
              <div key={ `key-${name}` } className={ `${classes.filterButton} ${name === selectedType? classes.filterButtonActive: null}` }
                onClick={ onClickFilter(name) }>{ label }{' '}
                  <span className={`${classes.badge} ${classes.badgeFilterButton}`}>{ typeCount[name] }</span>
              </div>
            ))}
          </div>

          <div className={classes.container}>

            <div className={ classes.listing }>
              {selectedJobs.map((job) => (
                <div onClick={() => onSelectJob(job.id)} key={`jobTitleKey${job.id}`}
                  className={ currJobId === job.id? classes.activeTitle: null}>
                  <div className={classes.job_card} id={`id${job.id}`} key={job.id}>
                    <h3 className={`heading ${classes.sidebar_item_title}`}>
                      { job.jd?.title }
                    </h3>

                    <div>
                      <p>
                        {job.urls.map( ([l,_]) => workplaces[l]).join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
            <div className={classes.container_right}>

              {jobs.map(job => {
                return (
                <div id={`job_${job.id}_id`} key={`job_${job.id}`} className={ currJobId === job.id? classes.selectedJob: null }
                  style={{ top: '120px', display: currJobId === job.id? 'block': 'none' }} >
                  <div style={{ paddingRight: '20px', paddingLeft: '13px', }}>

                    <h2>{job.jd?.title}</h2>
                    <br></br>

                    <h3>Locations</h3>
                    <table>
                      <tbody>
                        { job.urls.map(([location, link]) => (
                        <tr key={`apply_link_${location}`} style={{ fontSize: '1rem'}}>
                          <td style={{ margin: '10px', padding: '10px'}}>{ workplaces[location] }</td>
                          <td style={{ margin: '10px', padding: '10px'}}>
                            <a className='btn btn-primary' href={ link } target='_blank' rel="noopener noreferrer">Apply Now</a>
                          </td>
                        </tr>))}
                      </tbody>
                    </table>
                    <br></br>

                    { job.jd.description?.length > 0 && (<>
                    <h3>Job Description</h3>
                    { job.jd.description.map ((desc, i) => {
                      if (typeof(desc) === "string") {
                        return (<p className='para' style={{ lineHeight: '1.4', fontSize: '1rem', }} key={ i } >
                          {desc}
                        </p>)
                      } else if (typeof(desc) === 'object' && desc.length > 0) {
                        return (
                        <div>
                          {desc.map((resp, i) => (
                            <p className='para' style={{ lineHeight: '1.4', fontSize: '1rem', }} key={i} >
                              <span className={classes.dot}></span>
                              {resp}
                            </p>
                          ))}
                        </div>)
                      }
                    })}
                    <br></br>
                    </>)}
                    { job.jd.qualification?.length > 0 && (<>
                    <h3>Qualifications</h3>
                    <div>
                      {job.jd.qualification.map((qual, i) => {
                        if (typeof(qual) === "string") {
                          return (<p className='para' style={{ lineHeight: '1.4', fontSize: '1rem', }} key={ i } >
                            {qual}
                          </p>)
                        } else if (typeof(qual) === 'object' && qual.length > 0) {
                          return (
                          <div>
                            {qual.map((resp, i) => (
                              <p className='para' style={{ lineHeight: '1.4', fontSize: '1rem', }} key={i} >
                                <span className={classes.dot}></span>
                                {resp}
                              </p>
                            ))}
                          </div>)
                        }
                      })}
                    </div><br></br></>) }

                    { job.jd.plus?.length > 0 && (<>
                    <h3>Pluses</h3>
                    <div style={{ marginBottom: '20px' }}>
                      {job.jd.plus.map((plus, i) => {
                        if (typeof(plus) === "string") {
                          return (<p className='para' style={{ lineHeight: '1.4', fontSize: '1rem', }} key={ i } >
                            {plus}
                          </p>)
                        } else if (typeof(plus) === 'object' && plus.length > 0) {
                          return (
                          <div>
                            {plus.map((resp, i) => (
                              <p className='para' style={{ lineHeight: '1.4', fontSize: '1rem', }} key={i} >
                                <span className={classes.dot}></span>
                                {resp}
                              </p>
                            ))}
                          </div>)
                        }
                      })}
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
