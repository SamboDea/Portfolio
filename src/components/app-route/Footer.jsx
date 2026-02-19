import { Container } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container fluid className="mt-3 mt-lg-5 bg-fluid bg-dark text-white">
      <Container className="bg-footer">
        <div className="row d-flex flex-column flex-lg-row">
          <div className="col mt-lg-0 mt-lg-5">
            <h3>DEA SAMBO</h3>
          </div>
          <div className="col mt-lg-0 mt-lg-5">
            <h3>PAGES</h3>
            <p>Home</p>
            <p>About</p>
            <p>Portfolio</p>
            <p>Contact</p>
          </div>
          <div className="col mt-lg-0 mt-lg-5">
            <h3>SERVICE</h3>
            <p>Web Development</p>
            <p>FrontEnd Development</p>
            <p>BackEnd Development</p>
          </div>
          <div className="col mt-lg-0 mt-lg-5">
            <h3>CONTACT</h3>
            <p>
              <TfiEmail /> <span className="ms-2">sambodea54@gmail.com</span>
            </p>
            <p>
              <FaPhoneAlt /> <span className="ms-2">0969831440</span>
            </p>
            <p>
              <Link
                to="https://linkedin.com/in/dea-sambo-503b55315"
                target="_blank"
              >
                {" "}
                <FaLinkedin /> <span className="ms-2">Dea Sambo</span>
              </Link>
            </p>
            <p>
              <IoLocationOutline />{" "}
              <span className="ms-2">Orkide, Sensok, PhnomPenh</span>
            </p>
          </div>
          <div className="text-center py-lg-4 py-2">
            Copyright © {currentYear} | All Rights Reserved By Dea Sambo
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
