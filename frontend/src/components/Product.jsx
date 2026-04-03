import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProd } from "../JS/actions/prod.actions";
import EditProduct from "./EditProduct";
const Product = ({ prod, page }) => {
  const disaptch = useDispatch();
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
          {/* {page === "home" ? ( */}
          <div className="d-flex gap-3 justify-content-center">
            <Link to={`/prod/${prod._id}`}>
              <Button variant="primary">Détails</Button>
            </Link>
            {/* ) :
           ( */}
            {page === "profile" && (
              <>
                <EditProduct prod={prod} />
                <Button
                  variant="danger"
                  onClick={() =>
                    window.confirm(`Etes vous sùre de supprimer ${prod.title}`)
                      ? disaptch(deleteProd(prod._id))
                      : null
                  }
                >
                  Delete
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
