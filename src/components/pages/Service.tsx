import React from "react";
import PageHeader from "../shared/PageHeader";
import ServiceComponents from "../sections/Services";
import Testimonial from "../sections/Testimonial";

const Service = () => {
  return (
    <>
      <PageHeader title="services" listItemTitle="services" />
      <ServiceComponents />
      <Testimonial />
    </>
  );
};

export default Service;
