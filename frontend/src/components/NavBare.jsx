import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/actions/auth.actions";
import { useNavigate } from "react-router-dom";

const NavBare = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  // console.log(isAuth);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">MERN APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {isAuth ? (
                <>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      dispatch(logout(navigate));
                      // navigate("/");
                    }}
                  >
                    logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  {" "}
                  <Nav.Link href="/login">login</Nav.Link>
                  <Nav.Link href="/register">register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBare;
