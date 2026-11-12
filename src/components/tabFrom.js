import { useState } from "react";
import tabConfig from "../conifg/tabsName";


export default function Tabfrom() {
  const [activeTab, setActiveTab] = useState(0);
  const [error,setError] =useState();

  const [data, setData] = useState({
    name: "nikita",
    age: 28,
    email: "nk.2niki@gmail.com",
    intrest: ["music", "singing"],
    theme: "dark",
  });

   const submit=()=>{
    console.log('data submotted with', data )
   }

   const handlePrev = ()=>{
    setActiveTab((prev)=>{
      return prev-1;
    })
   }
   const handleNext =()=>{
    setActiveTab((prev)=>{
      return prev+1;
    })
   }

  const ActiveTabComponent = tabConfig[activeTab].componentName;

  return (
    <>
      <div>
        <div className="heading-container">
          {tabConfig.map((t, index) => (
            <button
              key={t.name}
              onClick={() => setActiveTab(index)}
              className={
                tabConfig[activeTab].name == t.name ? "tab-cell active" : "tab-cell"
              }
            >
              <div class="tabs-continer">{t.name}</div>
            </button>
          ))}
        </div>
        <div class="tab-body">
          <ActiveTabComponent userData={data} setData={setData} />
        </div>
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrev}>Previous</button>}
        {activeTab < tabConfig.length -1 && <button onClick={handleNext}>Next</button>}
        {activeTab == tabConfig.length -1 && <button onClick={submit} >Submit</button> }
      </div>
    </>
  );
}
