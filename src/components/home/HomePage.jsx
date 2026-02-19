import ComName from "../../widget/ComName";
import About from "../about/About";
import Portfolio from "../portfolio/portfolio";
import Contact from "../Contact/Contact";

function HomePage() {
  return (
    <div>
      <ComName name={" I'M DEA SAMBO JUNIOR WEB DEVELOPER "} />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default HomePage;
