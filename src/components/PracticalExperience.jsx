import { useState } from "react";
import "../styles/practical_experience.css";

function ExpInfo({ exp, changeInfo, deleteInfo, id, last }) {
  const [showButton, setShowButton] = useState(id === last ? false : true);

  const handleOnClick = () => {
    setShowButton(!showButton);
  };

  return (
    <>
      <button
        className={showButton ? "show-exp-button" : "hidden"}
        onClick={handleOnClick}
      >
        {exp.company}
      </button>
      <div className={showButton ? "hidden" : "exp-inputs-div"}>
        <label>
          Company name:
          <input
            type="text"
            value={exp.company}
            onChange={(e) => changeInfo(id, "company", e.target.value)}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            value={exp.position}
            onChange={(e) => changeInfo(id, "position", e.target.value)}
          />
        </label>
        <label>
          Start date:
          <input
            type="text"
            value={exp.startDate}
            onChange={(e) => changeInfo(id, "startDate", e.target.value)}
          />
        </label>
        <label>
          End date:
          <input
            type="text"
            value={exp.endDate}
            onChange={(e) => changeInfo(id, "endDate", e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={exp.location}
            onChange={(e) => changeInfo(id, "location", e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={exp.description}
            onChange={(e) => changeInfo(id, "description", e.target.value)}
          ></textarea>
        </label>
        <div className="buttons-div">
          <button onClick={deleteInfo}>Delete</button>
          <button onClick={handleOnClick}>Done</button>
        </div>
      </div>
    </>
  );
}

function PracticalExperience({ info, changeInfo, newInfo, deleteInfo }) {
  return (
    <div className="info">
      <h2>Experience</h2>
      {info.exp.map((exp, id) => {
        return (
          <ExpInfo
            exp={exp}
            key={id}
            id={id}
            changeInfo={changeInfo}
            deleteInfo={deleteInfo}
            last={info.exp.length - 1}
          ></ExpInfo>
        );
      })}
      <button onClick={newInfo} className="add-inputs-button">
        +
      </button>
    </div>
  );
}

export default PracticalExperience;
