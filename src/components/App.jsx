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

  return (
    <>
      <GeneralInfo info={info} setInfo={generalInfoChange}></GeneralInfo>
    </>
  );
}

export default App;
