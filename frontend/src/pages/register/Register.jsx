import { useState } from "react";
import "./register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { register } from "../../JS/actions/auth.actions";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  // console.log(newUser);
  const handleSubmit = (e) => {
    e.preventDefault(); //empêcher le chargement
    dispatch(register(newUser, navigate));
    // navigate('/profile')
  };
  return (
    <div className="container mx-auto w-50 p-5 page">
      <h2>Register page </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Control
            type="text"
            placeholder="Enter your image Profile"
            name="image"
            value={newUser.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <p>
          Si vous avez déja un compte veuillez vous connectez, svp,{" "}
          <a href="/login">Login</a>
        </p>

        <Button
          variant="primary"
          type="submit"
          disabled={!newUser.name || !newUser.email || !newUser.password}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
