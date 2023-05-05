import { Button, Card, Form } from "react-bootstrap";

import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-100 mt-4"
            type="text"
            required
          />
          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-100 mt-4"
            type="text"
            required
          />
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-100 mt-4"
            type="password"
            required
          />
          <Form.Control
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-100 mt-4"
            type="password"
            required
          />

          <Button className="w-100 mt-4">Sign Up</Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already been here? <a href="#">Sign In</a>
      </div>
    </>
  );
};

export default Signup;
