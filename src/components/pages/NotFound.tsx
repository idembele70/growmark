import React from "react";
import PageHeader from "../shared/PageHeader";
import NotFoundComponents from "../containers/NotFound";
const NotFound = () => {
  return (
    <>
      <PageHeader title="404 Error" listItemTitle="404 Error" />
      <NotFoundComponents />
    </>
  );
};

export default NotFound;
