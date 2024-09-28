import GeneralInfo from "./GeneralInfo";
import { useState } from "react";

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

  return (
    <>
      <GeneralInfo info={info} setInfo={generalInfoChange}></GeneralInfo>
    </>
  );
}

export default App;
