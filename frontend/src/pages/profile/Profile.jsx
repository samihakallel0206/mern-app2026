import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import AddProduct from "../../components/AddProduct";
import { useEffect } from "react";
import { getMyProd } from "../../JS/actions/prod.actions";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const mesFormation = useSelector((state) => state.productReducer.myProd);
  (console.log("mesFormation", mesFormation),
    useEffect(() => {
      dispatch(getMyProd());
    }, [dispatch]));
  // console.log(user);
  return (
    <div className="m-5 page">
      <h4>Page Profile</h4>
      <h5 style={{ color: "teal" }}>Hello {user.name} 🖐️</h5>
      <AddProduct />
    </div>
  );
};

export default Profile;
