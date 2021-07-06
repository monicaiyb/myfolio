import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";
import { rgbToHex } from "@material-ui/core";

const { Panel } = Collapse;

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
    //update this checked information into Parent Component
  };

  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <div className="checkboxStyles">
        <Checkbox
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        {value.name}
        </div>
      </React.Fragment>
    ));

  return (
    <div class="categorySelector">
      <Collapse defaultActiveKey={["0"]}
      style={{backgroundColor: "transparent", position: 'absolute', zIndex: 1}}> 
        <Panel header="Categories" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse> {/* Made the selector absolute to give it zindex. */}
    </div>
  );
}

export default CheckBox;
