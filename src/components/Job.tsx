interface JobProps {
  job: {
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
  };
}

const Job: React.FC<JobProps> = ({ job }) => {
  return (
    <div>
      <div className="card card--feature">
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
    </div>
  );
};

export default Job;
