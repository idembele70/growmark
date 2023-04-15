import React from "react";
import PageHeader from "../shared/PageHeader";
import QuoteComponents from "../sections/Quote";
const Quote = () => {
  return (
    <>
      <PageHeader title="Quote" listItemTitle="Quote" />
      <QuoteComponents />
    </>
  );
};

export default Quote;
