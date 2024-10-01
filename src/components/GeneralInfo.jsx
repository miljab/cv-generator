import "../styles/general_info.css";

function GeneralInfo({ info, setInfo }) {
  return (
    <div className="info">
      <h2>Personal details</h2>
      <div className="general-info-inputs">
        <label>
          First name:
          <input
            type="text"
            value={info.firstName}
            onChange={(event) => {
              setInfo("firstName", event.target.value);
            }}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            value={info.lastName}
            onChange={(event) => {
              setInfo("lastName", event.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={info.email}
            onChange={(event) => {
              setInfo("email", event.target.value);
            }}
          />
        </label>
        <label>
          Phone number:
          <input
            type="text"
            value={info.phone}
            onChange={(event) => {
              setInfo("phone", event.target.value);
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default GeneralInfo;
