import "../styles/cv.css";

function ExperienceElement({ exp }) {
  const endDate =
    exp.startDate.length > 0 && exp.endDate.length > 0
      ? ` - ${exp.endDate}`
      : exp.endDate;

  const position =
    exp.company.length > 0 && exp.position.length > 0
      ? `, ${exp.position}`
      : exp.position;

  return (
    <div className="experience-element">
      <div className="exp-date-and-location">
        <span className="exp-date">
          {exp.startDate}
          {endDate}
        </span>
        <span className="company-location">{exp.location}</span>
      </div>
      <p className="company">
        <span className="company-name">{exp.company}</span>
        {position}
      </p>
      <p className="exp-description">{exp.description}</p>
    </div>
  );
}

function Experience({ info }) {
  return (
    <div className={info.exp.length > 0 ? "experience" : "hidden"}>
      <div className="experience-header">Experience</div>
      <div className="experience-list">
        {info.exp.map((exp, id) => {
          return <ExperienceElement exp={exp} key={id}></ExperienceElement>;
        })}
      </div>
    </div>
  );
}

function EducationElement({ edu }) {
  const endDate =
    edu.startDate.length > 0 && edu.endDate.length > 0
      ? ` - ${edu.endDate}`
      : edu.endDate;

  const degree =
    edu.school.length > 0 && edu.degree.length > 0
      ? `, ${edu.degree}`
      : edu.degree;

  return (
    <div className="education-element">
      <div className="school-date-and-location">
        <span className="school-date">
          {edu.startDate}
          {endDate}
        </span>
        <span className="school-location">{edu.location}</span>
      </div>
      <p className="school">
        <span className="school-name">{edu.school}</span>
        {degree}
      </p>
    </div>
  );
}

function Education({ info }) {
  return (
    <div className={info.edu.length > 0 ? "education" : "hidden"}>
      <div className="education-header">Education</div>
      <div className="education-list">
        {info.edu.map((edu, id) => {
          return <EducationElement edu={edu} key={id}></EducationElement>;
        })}
      </div>
    </div>
  );
}

function PersonalDetails({ info }) {
  return (
    <div className="personal-details">
      <span className="name">
        {info.firstName} {info.lastName}
      </span>
      <span className="email">{info.email}</span>
      <span className="phone">{info.phone}</span>
    </div>
  );
}

function CV({ info }) {
  return (
    <div className="CV">
      <PersonalDetails info={info.general}></PersonalDetails>
      <Education info={info}></Education>
      <Experience info={info}></Experience>
    </div>
  );
}

export default CV;
