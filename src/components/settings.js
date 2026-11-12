export const Settings = ({ userData, setData }) => {
  const { theme } = userData;
  const handleTheme = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name.toLowerCase(),
    }));
  };
  return (
    <div className={`tab-box ${theme == "dark" ? "dark-mode" : "light-mode"}`}>
      <h1>Theme Settings</h1>
      <div>
        <label>Light</label>
        <input
          type="radio"
          checked={theme.includes("light")}
          name="Light"
          onChange={(e) => {
            handleTheme(e);
          }}
        />
      </div>
      <div>
        <label>Dark</label>
        <input
          type="radio"
          name="Dark"
          checked={theme.includes("dark")}
          onChange={(e) => {
            handleTheme(e);
          }}
        />
      </div>
    </div>
  );
};
