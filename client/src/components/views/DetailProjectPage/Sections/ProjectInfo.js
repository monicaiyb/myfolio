import React, { useEffect, useState } from "react";
import { Descriptions } from "antd";

function ProjectInfo(props) {
  const [Project, setProject] = useState({});

  useEffect(() => {
    setProject(props.detail);
  }, [props.detail]);

  return (
    <div>
      <Descriptions title="Project Info">
        <Descriptions.Item label="Price"> {Project.price}</Descriptions.Item>
        <Descriptions.Item label="Sold">{Project.sold}</Descriptions.Item>
        <Descriptions.Item label="View"> {Project.views}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {" "}
          {Project.description}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default ProjectInfo;
