import { Container, Form, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <Container data-aos="zoom-in">
        <div className="row mt-lg-5 mt-3">
          <div className="col-lg-6 col-12">
            <Form>
              <Form.Group controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="input your username"
                  className="py-2"
                />
              </Form.Group>

              <Form.Group controlId="validationCustom02">
                <Form.Control
                  required
                  type="email"
                  placeholder="input your email"
                  className="mt-4 py-2"
                />
              </Form.Group>

              <Form.Group controlId="validationCustom03">
                <Form.Control
                  required
                  type="password"
                  placeholder="input your password"
                  className="mt-4 py-2"
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
            </Form>
          </div>
          <div className="col-lg-6 map-responsive mt-3 mt-lg-0">
            <iframe
              title="google-map-contact"
              src="https://www.google.com/maps/embed?pb=..."
              allowFullScreen=""
              height="150"
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
