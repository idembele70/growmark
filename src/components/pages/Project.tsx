import React from "react";
import PageHeader from "../shared/PageHeader";
import ProjectComponents from "../sections/Projects";

const Project = () => {
  return (
    <>
      <PageHeader title="projects" listItemTitle="projects" />
      <ProjectComponents />
    </>
  );
};

export default Project;
