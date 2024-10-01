import GeneralInfo from "./GeneralInfo";
import { useState } from "react";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

function App() {
  const [info, setInfo] = useState({
    general: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    edu: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ],
    exp: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ],
  });

  const generalInfoChange = (key, value) => {
    const newInfo = { ...info };
    newInfo.general[key] = value;
    setInfo(newInfo);
  };

  const eduInfoChange = (id, key, value) => {
    const newInfo = { ...info };
    newInfo.edu[id][key] = value;
    setInfo(newInfo);
  };

  const newEduInfo = () => {
    const newInfo = { ...info };
    newInfo.edu.push({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setInfo(newInfo);
  };

  const deleteEduInfo = (id) => {
    const newInfo = { ...info };
    newInfo.edu.splice(id, 1);
    setInfo(newInfo);
  };

  const expInfoChange = (id, key, value) => {
    const newInfo = { ...info };
    newInfo.exp[id][key] = value;
    setInfo(newInfo);
  };

  const newExpInfo = () => {
    const newInfo = { ...info };
    newInfo.exp.push({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setInfo(newInfo);
  };

  const deleteExpInfo = (id) => {
    const newInfo = { ...info };
    newInfo.exp.splice(id, 1);
    setInfo(newInfo);
  };

  return (
    <>
      <h1>CV GENERATOR</h1>
      <div className="inputs-div">
        <GeneralInfo info={info} setInfo={generalInfoChange}></GeneralInfo>
        <EducationalExperience
          info={info}
          changeInfo={eduInfoChange}
          newInfo={newEduInfo}
          deleteInfo={deleteEduInfo}
        ></EducationalExperience>
        <PracticalExperience
          info={info}
          changeInfo={expInfoChange}
          newInfo={newExpInfo}
          deleteInfo={deleteExpInfo}
        ></PracticalExperience>
      </div>
    </>
  );
}

export default App;
