import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { useDispatch } from "react-redux";
// import { getOneUser } from "../JS/actions/users.actions";

function DetailUser({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getOneUser(user._id));
  //   }, [dispatch]);
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Détail de {user.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user.email}
          <hr />
          {user.createdAt}
          <hr />
          {user.updatedAt}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailUser;
