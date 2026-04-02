import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addProduct } from "../JS/actions/prod.actions";

function AddProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newProd, setNewProd] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    duree: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewProd({ ...newProd, [e.target.name]: e.target.value });
  };
  //   console.log(newProd)
  const handleSubmit = (e) => {
    e.preventDefault();
    //il vaut mieux enlever les vides et tester
    if (newProd.title.trim() === "" || newProd.image.trim() === "")
      return alert(
        "veuillez  saisir des champs valides pour le titre et l'image",
      );
    dispatch(addProduct(newProd));
    handleClose();
    setNewProd({
      title: "",
      description: "",
      image: "",
      price: "",
      duree: "",
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Rajouter un nouveau produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouveau...</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter title"
                required
                name="title"
                value={newProd.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter description"
                required
                name="description"
                value={newProd.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="url"
                placeholder="Enter image Url"
                required
                name="image"
                value={newProd.image}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter price"
                required
                name="price"
                value={newProd.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter durée"
                required
                name="duree"
                value={newProd.duree}
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
                !newProd.description ||
                !newProd.title ||
                !newProd.image ||
                !newProd.price ||
                !newProd.duree
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

export default AddProduct;
