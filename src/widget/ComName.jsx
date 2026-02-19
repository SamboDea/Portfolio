const ComName = ({ name }) => {
  return (
    <div
      className="container-fluid text-white com-name-fire com-name d-flex mt-5 align-items-center justify-content-center"
      data-aos="fade-down"
    >
      <h2 className="fw-bold hvr-float-shadow fire-title">
        {name.split("").map((char, index) => (
          <span key={index} style={{ "--i": index }}>
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};
export default ComName;
