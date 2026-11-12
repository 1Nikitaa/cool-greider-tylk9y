export const Profile = ({ userData, setData }) => {
  let { name, email, age } = userData;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <>
      <div className="tab-box">
        <div className="profile-input">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleDataChange(e, "name")}
          />
        </div>
        <div className="profile-input">
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => handleDataChange(e, "age")}
          />
        </div>
        <div className="profile-input">
          <label>
            Emai:
            <input
              type="email"
              value={email}
              onChange={(e) => handleDataChange(e, "email")}
            />
          </label>
        </div>
      </div>
    </>
  );
};
