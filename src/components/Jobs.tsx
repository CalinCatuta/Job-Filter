import { useEffect, useState } from "react";

import jobsData from "../db/data.json";

type Jobs = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools?: string[];
}[];

const Jobs = () => {
  const [jobs, setJobs] = useState<Jobs>([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <div>
      <header></header>

      <main>
        <div className="header-content invisible">
          <div className="job-filter__container"></div>
          <button className="clear-btn">Clear</button>
        </div>
        <div className="card__container">
          {jobs.map((job) => (
            <div key={job.id} className="card card--feature">
              <img src={job.logo} className="card_logo" />
              <div className="card__body">
                <div className="card__top">
                  <span>{job.company}</span>
                  <span className="tag__container">
                    {job.new && <span className="tag tag--new">New</span>}
                    {job.featured && (
                      <span className="tag tag--featured">Featured</span>
                    )}
                  </span>
                </div>
                <h1 className="card__header">{job.position}</h1>
                <div className="card__detail">
                  <span>{job.postedAt}</span>
                  <span className="circle"></span>
                  <span>{job.contract}</span>
                  <span className="circle"></span>
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="filter__container">
                <span className="filter">{job.role}</span>
                <span className="filter">{job.level}</span>
                {job.languages.map((lang) => (
                  <span className="filter" key={lang}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Jobs;
