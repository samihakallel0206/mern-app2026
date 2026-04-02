import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
          <Link to={`/prod/${prod._id}`}>
            <Button variant="primary">Détails</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
