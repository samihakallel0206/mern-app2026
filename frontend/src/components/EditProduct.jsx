import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { editProd } from "../JS/actions/prod.actions";

function EditProduct({ prod }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [prodEdited, setProdEdited] = useState({
    title: prod.title,
    description: prod.description,
    price: prod.price,
    image: prod.image,
    duree: prod.duree,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setProdEdited({ ...prodEdited, [e.target.name]: e.target.value });
  };
  //   console.log(prodEdited);
  const handleEdit = (e) => {
    e.preventDefault();
    if (!prodEdited.title.trim() || !prodEdited.image.trim())
      return alert("veuillez saisir le titre et l'image");
    dispatch(editProd(prod._id, prodEdited));
    handleClose();
  };
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit la formation:{prod.title}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEdit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                name="title"
                value={prodEdited.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                name="description"
                value={prodEdited.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="url"
                required
                name="image"
                value={prodEdited.image}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                required
                name="price"
                value={prodEdited.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                name="duree"
                value={prodEdited.duree}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={
                !prodEdited.description ||
                !prodEdited.title ||
                !prodEdited.image ||
                !prodEdited.price ||
                !prodEdited.duree
              }
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditProduct;
