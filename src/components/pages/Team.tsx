import React from "react";
import PageHeader from "../shared/PageHeader";
import TeamComponents from "../sections/Team";
const Team = () => {
  return (
    <>
      <PageHeader title="Our Team" listItemTitle="Our Team" />
      <TeamComponents />
    </>
  );
};

export default Team;
