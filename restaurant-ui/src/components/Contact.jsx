import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

function Contact() {
  const emailRef = useRef();
  const messageRef = useRef();
  const nameRef = useRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("sending mail");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "87vh" }}
    >
      <div className="w-100" style={{ maxWidth: "800px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Contact Us</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" ref={nameRef} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  ref={messageRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Send email
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
export default Contact;
