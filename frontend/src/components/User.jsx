import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteUser } from "../JS/actions/users.actions";
import DetailUser from "./DetailUser";

const User = ({ user }) => {
  //   console.log(user);
  const dispatch = useDispatch();

  return (
    <div >
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={user.image} /> */}
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <div className="d-flex gap-5">
            <DetailUser user={user} />
            <Button
              variant="danger"
              onClick={() =>
                window.confirm(
                  `Etes vous sûre de vouloir supprimer ${user.name}`,
                )
                  ? dispatch(deleteUser(user._id))
                  : null
              }
            >
              delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
