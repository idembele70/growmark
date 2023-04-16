import React from "react";
import PageHeader from "../shared/PageHeader";
import ContactComponent from "../sections/Contact";
const Contact = () => {
  return (
    <>
      <PageHeader title="Contact Us" listItemTitle="Contact Us" />
      <ContactComponent />
    </>
  );
};

export default Contact;
