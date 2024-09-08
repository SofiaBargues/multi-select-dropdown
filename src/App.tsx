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
  const [isClicked, setIsClicked] = useState(new Array(49).fill(false));

  function handleClick(i) {
    const cosa = [...isClicked];
    cosa[i] = !isClicked[i];
    setIsClicked(cosa);
  }

  const namesBoxes = names.map((x, i) => (
    <label>
      <input
        onClick={() => handleClick(i)}
        checked={isClicked[i]}
        type="checkbox"
        id={x}
        value={x}
      />
      {x}
    </label>
  ));

  return (
    <fieldset className="flex flex-col ">
      <legend>Choose your monster's features:</legend>
      <div className="flex flex-col max-w-64 ">
        <form>{namesBoxes}</form>
      </div>
    </fieldset>
  );
}

export default App;
