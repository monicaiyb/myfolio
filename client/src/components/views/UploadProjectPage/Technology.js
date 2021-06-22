import React, { useState } from "react";
import { technology } from "./data/data";

export default function App(props) {

  const [checkedTechnology, setCheckedTechnology] = useState(
    new Array(technology.length).fill(false)
  );

  const handleOnChangeTechnology = (position) => {
    const updatedCheckedTechnology = checkedTechnology.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedTechnology(updatedCheckedTechnology);

    const totalPrice = updatedCheckedTechnology.reduce(
      (sum, currentTechnology, index) => {
        if (currentTechnology === true) {
          return sum + `${technology[index].name},`;
        }
        return sum;
      },
      ""
    );
    props.TechnologyValue = totalPrice;
    console.log(props.TechnologyValue);
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
                    checked={checkedTechnology[index]}
                    onChange={() => handleOnChangeTechnology(index)}
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
