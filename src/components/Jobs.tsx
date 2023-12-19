import { useEffect, useState } from "react";
import Job from "./Job";

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
            <Job key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Jobs;
