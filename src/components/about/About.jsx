import { Stepper, Step, StepLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import Profile from "../../assets/images/profile.jpg";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Container } from "react-bootstrap";
import SkillCard from "../skill/SkillCard";
const About = () => {
  const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[700],
    }),
    variants: [
      {
        props: ({ ownerState }) => ownerState.active,
        style: {
          backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
          boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
        },
      },
      {
        props: ({ ownerState }) => ownerState.completed,
        style: {
          backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        },
      },
    ],
  }));
  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <SchoolIcon />,
      2: <SchoolIcon />,
      3: <SchoolIcon />,
      4: <SchoolIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  const steps = [
    "Primary School",
    "Secondary School",
    "High School",
    "University",
  ];
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
      ...theme.applyStyles("white", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
  }));
  return (
    <>
      <Container className="mt-1 text-white" data-aos="zoom-in">
        <div className="row align-items-center modern-about-section">
          <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
            <div className="profile-image-modern">
              <img src={Profile} alt="Profile" />
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <h3 className="fw-bold text-white mb-3 name">
              Hello! I'm Dea Sambo
            </h3>
            <p className="lead mb-4 text-white">
              I’m an Information Technology student at the National Technical
              Training Institute (NTTI), currently in Year IV, Semester I,
              pursuing my Bachelor’s Degree in Information Technology.
            </p>

            <div className="modern-card p-1 mb-3 text-white">
              <h5 className="fw-semibold mb-2">My Journey</h5>
              <p className="mb-0 text-white">
                My journey in tech grew from simple curiosity into a passion for
                building clean, beautiful, and functional applications using
                modern web technologies.
              </p>
            </div>

            <div className="modern-card p-1">
              <h5 className="fw-semibold mb-2 text-white">What I Do</h5>
              <p className="mb-0 text-white">
                I build responsive, interactive interfaces using{" "}
                <strong>React.js</strong> and develop powerful backend systems
                with <strong>Laravel</strong>. Together, I create full-stack
                digital experiences with clean architecture and modern UI/UX
                design principles.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Stepper
        className="mt-lg-3 mt-3 text-white"
        alternativeLabel
        activeStep={4}
        connector={<ColorlibConnector />}
        data-aos="zoom-in"
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container>
        <SkillCard />
      </Container>
    </>
  );
};

export default About;
