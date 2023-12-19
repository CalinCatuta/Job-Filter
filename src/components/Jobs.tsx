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

export const Jobs = () => {
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
            <div className="card card--feature">
              <img src={job.logo} className="card_logo" />
              <div className="card__body">
                <div className="card__top">
                  <span></span>
                  <span className="tag__container">
                    <span className="tag tag--new"></span>
                    <span className="tag tag--featured"></span>
                  </span>
                </div>
                <h1 className="card__header"></h1>
                <div className="card__detail">
                  <span></span>
                  <span className="circle"></span>
                  <span></span>
                  <span className="circle"></span>
                  <span></span>
                </div>
              </div>
              <div className="filter__container">
                <span className="filter"></span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
