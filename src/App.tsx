import { useState } from "react";
import "./App.css";
const names = [
  "Alabama",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [clickedElements, setClickedElements] = useState(
    new Array(names.length).fill(false)
  );

  function handleClick(i: number) {
    const cosa = [...clickedElements];
    cosa[i] = !clickedElements[i];
    setClickedElements(cosa);
  }

  const namesBoxes = names.map((x, i) => (
    <label>
      <input
        onClick={() => handleClick(i)}
        checked={clickedElements[i]}
        type="checkbox"
        id={x}
        value={x}
      />
      {x}
    </label>
  ));

  const countClicked = clickedElements.filter((x) => x).length;

  return (
    <div className="flex flex-col justify-center h-screen bg-slate-200 ">
      <h1 className="text-2xl flex justify-center m-11">Multi-Select #5</h1>
      <div className="flex flex-col gap-2 ">
        <button
          className="flex p-5  w-[400px] justify-around  bg-white shadow-lg m-auto"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>{countClicked}</div>
          <div>selected ▼</div>
        </button>
        <div className=" m-auto shadow-lg ">
          {isExpanded ? (
            <div className="flex flex-col p-5  bg-white max-w-[700px] ">
              <div>Search states:</div>
              <div className={"grid grid-cols-3 gap-x-2 "}>{namesBoxes}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
