import { Container, Form, Button } from "react-bootstrap";
import ComName from "../../widget/ComName";
const Contact = () => {
  return (
    <>
      <ComName name={"CONTACT"} />
      <Container data-aos="zoom-in">
        <div className="row mt-3 mt-lg-5">
          <div className="col-lg-6 col-12">
            <Form.Group controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="input your username"
                className="py-2"
              />
            </Form.Group>
            <Form.Group controlId="validationCustom01">
              <Form.Control
                className="mt-4 py-2"
                required
                type="email"
                placeholder="input your email   "
              />
            </Form.Group>
            <Form.Group controlId="validationCustom01">
              <Form.Control
                className="mt-4 py-2"
                required
                type="email"
                placeholder="input your password"
              />
            </Form.Group>
            <Form.Group controlId="validationCustom04">
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter your message here"
                className="mt-4 py-2"
                required
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Button
                variant="success"
                type="submit"
                className="w-100 py-2 bg-transparent border-0"
              >
                Send Message
              </Button>
            </Form.Group>
          </div>
          <div className="col-lg-6 map-responsive mt-3 mt-lg-0">
            <iframe
              title="google-map-contact"
              src="https://www.google.com/maps/embed?pb=..."
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Contact;
