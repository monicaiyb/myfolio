import React, { useEffect, useState } from "react";
import Axios from "axios";

import ProjectImage from "./Sections/ProjectImage";
import ProjectInfo from "./Sections/ProjectInfo";
function DetailProjectPage(props) {
  const projectId = props.match.params.projectId;
  const [Project, setProject] = useState([]);

  useEffect(() => {
    Axios.get(`/api/project/projects_by_id?id=${projectId}&type=single`).then(
      (response) => {
        setProject(response.data[0]);
      }
    );
  }, [projectId]);

  return (
    <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{Project.title}</h1>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <ProjectImage detail={Project} />
        </div>
        <div className="col">
          <ProjectInfo detail={Project} />
        </div>
      </div>
    </div>
  );
}

export default DetailProjectPage;
