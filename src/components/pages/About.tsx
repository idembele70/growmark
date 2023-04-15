import AboutComponent from "../sections/About";
import Team from "../sections/Team";
import PageHeader from "../shared/PageHeader";
const About = () => {
  return (
    <>
      <PageHeader title="about us" listItemTitle="about" />
      <AboutComponent />
      <Team />
    </>
  );
};

export default About;
