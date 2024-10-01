import { useState } from "react";
import "../styles/educational_experience.css";

function EduInfo({ edu, changeInfo, deleteInfo, id, last }) {
  const [showButton, setShowButton] = useState(id === last ? false : true);

  const handleOnClick = () => {
    setShowButton(!showButton);
  };

  return (
    <>
      <button
        className={showButton ? "show-edu-button" : "hidden"}
        onClick={handleOnClick}
      >
        {edu.school}
      </button>
      <div className={showButton ? "hidden" : "edu-inputs-div"}>
        <label>
          School name:
          <input
            type="text"
            value={edu.school}
            onChange={(e) => changeInfo(id, "school", e.target.value)}
          />
        </label>
        <label>
          Degree:
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => changeInfo(id, "degree", e.target.value)}
          />
        </label>
        <label>
          Start date:
          <input
            type="text"
            value={edu.startDate}
            onChange={(e) => changeInfo(id, "startDate", e.target.value)}
          />
        </label>
        <label>
          End date:
          <input
            type="text"
            value={edu.endDate}
            onChange={(e) => changeInfo(id, "endDate", e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={edu.location}
            onChange={(e) => changeInfo(id, "location", e.target.value)}
          />
        </label>
        <div className="buttons-div">
          <button onClick={deleteInfo}>Delete</button>
          <button onClick={handleOnClick}>Done</button>
        </div>
      </div>
    </>
  );
}

function EducationalExperience({ info, changeInfo, newInfo, deleteInfo }) {
  return (
    <div className="info">
      {info.edu.map((edu, id) => {
        return (
          <EduInfo
            edu={edu}
            key={id}
            id={id}
            changeInfo={changeInfo}
            deleteInfo={deleteInfo}
            last={info.edu.length - 1}
          ></EduInfo>
        );
      })}
      <button onClick={newInfo}>+</button>
    </div>
  );
}

export default EducationalExperience;
