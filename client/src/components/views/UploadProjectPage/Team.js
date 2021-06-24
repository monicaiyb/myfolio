import React, { useTeam } from "react";
import { team } from "./data/data";

export default function App(props) {

  const [checkedTeam, setCheckedTeam] = useTeam(
    new Array(team.length).fill(false)
  );

  const handleOnChangeTeam = (position) => {
    const updatedCheckedTeam = checkedTeam.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedTeam(updatedCheckedTeam);

    const totalPrice = updatedCheckedTeam.reduce(
      (sum, currentTeam, index) => {
        if (currentTeam === true) {
          return sum + `${team[index].name},`;
        }
        return sum;
      },
      ""
    );
    props.TeamValue = totalPrice;
    console.log(props.TeamValue);
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
                    checked={checkedTeam[index]}
                    onChange={() => handleOnChangeTeam(index)}
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
