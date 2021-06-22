import React, { useState } from "react";
import { technology } from "./data/data";

export default function App() {
  let TechnologyValue = "";

  const [checkedState, setCheckedState] = useState(
    new Array(technology.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + `${technology[index].name},`;
        }
        return sum;
      },
      ""
    );
    TechnologyValue = totalPrice;
    console.log(TechnologyValue);
    // var nameArr = totalPrice.split(",");
    // console.log(nameArr);
  };

  return (
    <div className="App">
      <h3>Technologies Used</h3>
      <ul className="technology-list">
        {technology.map(({ name }, index) => {
          return (
            <p key={index}>
              <div className="technology-list-item">
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
