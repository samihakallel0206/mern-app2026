import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ prod }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.image} height={250} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <div>
            {" "}
            {prod.description}
            <hr />
            {prod.duree}
            <hr />
            <span>{prod.price} $ </span>
            <hr />
          </div>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
