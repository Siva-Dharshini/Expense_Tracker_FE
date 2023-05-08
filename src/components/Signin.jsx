import { Button, Card, Container, Form } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signin, currentUser } = useAuth();
  const navigate = useNavigate();

  return currentUser ? (
    <Navigate to="/" />
  ) : (
    <Container className="w-50 mt-5">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>

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

          <Button
            onClick={async () => {
              const isSignedIn = await signin(username, password);
              if (isSignedIn) {
                navigate("/");
              }
            }}
            className="w-100 mt-4"
          >
            Sign In
          </Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        New here? <a href="#">Sign Up</a>
      </div>
    </Container>
  );
};

export default Signin;
