import React from 'react'

const Card = ({job}) => {
  const {company, logo, featured, position, role, level, postedAt, contract, location, languages, tools} = job;


  return (
    <div className="card">
      <p className="image-div">
        <img src={logo} alt="" className="company-logo"></img>
      </p>

      <section className="text-content-wrapper">
        <div>
          <div className="company-name--container">
            <div className="info  company-name">{company}</div>
            {job.new ? <div className="info stats-new">NEW!</div> : ""}
            {featured ? <div className="info stats-feature">FEATURED</div> : ""}
          </div>

          <h4>{position}</h4>

          <div className="light">
            <span>{postedAt}</span> <span> • {contract}</span>
            <span> • {location}</span>
          </div>
        </div>

        <div className="features-container">
          <button className="feature">{role}</button>
          <button className="feature">{level}</button>
          {languages.map((language) => (
            <button className="feature">{language}</button>
          ))}
          {tools.map((tool) => (
            <button className="feature">{tool}</button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Card