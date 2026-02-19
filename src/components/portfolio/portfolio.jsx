import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { portfolios } from "../../constatns/portfolio";
const Portfolio = () => {
  return (
    <>
      <Container>
        <div className="row g-4">
          {portfolios.map((item, index) => {
            return (
              <div
                className="col-12 col-lg-4 mt-lg-5 mt-5"
                key={index}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="position-relative overflow-hidden">
                  <img src={item.image} alt="" className="w-100 rounded-3" />

                  {/* Overlay Text */}
                  <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <span className="px-3 py-1 bg-dark text-info rounded opacity-75">
                      {item.lang}
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  {!item.url ? (
                    <span className="py-2 px-2 bg-secondary rounded-3 text-white opacity-50 cursor-not-allowed d-inline-block">
                      Don't have URL
                    </span>
                  ) : (
                    <Link
                      to={item.url}
                      target="_blank"
                      className="py-2 px-2 bg-success rounded-3 text-white"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};
export default Portfolio;
