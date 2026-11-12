export const Intrest = ({ userData, setData }) => {
  let { name, intrest } = userData;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      intrest: e.target.checked
        ? [...prevState.intrest, e.target.name]
        : prevState.intrest.filter((item) => item !== e.target.name),
    }));
  };
  return (
    <>
      <div class="tab-box">
        <h1>Hey! {name}</h1>
        <div>
          <div>
            <label>
              coding
              <input
                type="checkbox"
                name="coding"
                checked={intrest.includes("coding")}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Music
              <input
                type="checkbox"
                name="music"
                checked={intrest.includes("music")}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              singing
              <input
                type="checkbox"
                name="singing"
                checked={intrest.includes("singing")}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
