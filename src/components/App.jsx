import GeneralInfo from "./GeneralInfo";
import { useState } from "react";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import CV from "./CV";

function App() {
  const [info, setInfo] = useState({
    general: {
      firstName: "Josephine",
      lastName: "Meyers",
      email: "josephine.meyers@mail.co.uk",
      phone: "+44 3245 5521 5521",
    },
    edu: [
      {
        school: "London City University",
        degree: "Bachelors in Economics",
        startDate: "08/2020",
        endDate: "present",
        location: "New York City, US",
      },
    ],
    exp: [
      {
        company: "Umbrella Inc.",
        position: "UX & UI Designer",
        startDate: "08/2020",
        endDate: "present",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
      },
    ],
  });

  // const [info, setInfo] = useState({
  //   general: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //   },
  //   edu: [
  //     {
  //       school: "",
  //       degree: "",
  //       startDate: "",
  //       endDate: "",
  //       location: "",
  //     },
  //   ],
  //   exp: [
  //     {
  //       company: "",
  //       position: "",
  //       startDate: "",
  //       endDate: "",
  //       location: "",
  //       description: "",
  //     },
  //   ],
  // });

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
      <div className="container">
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
        <CV info={info}></CV>
      </div>
    </>
  );
}

export default App;
