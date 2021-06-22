import React, { useState } from "react";
import { team } from "./data/data";

export default function App() {
  let TeamValue = "";

  const [checkedState, setCheckedState] = useState(
    new Array(team.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + `${team[index].name},`;
        }
        return sum;
      },
      ""
    );
    TeamValue = totalPrice;
    console.log(TeamValue);
    // var nameArr = totalPrice.split(",");
    // console.log(nameArr);
  };

  return (
    <div className="App">
      <h3>Team Involved</h3>
      <ul className="team-list">
        {team.map(({ name }, index) => {
          return (
            <p key={index}>
              <div className="team-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}> {name}</label>
                </div>
              </div>
            </p>
          );
        })}
      </ul>
    </div>
  );
}
