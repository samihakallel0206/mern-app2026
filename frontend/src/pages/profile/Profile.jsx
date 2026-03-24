import { useSelector } from "react-redux";
import "./profile.css";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  return (
    <div className="m-5 page">
      <h4>Page Profile</h4>
      <h5 style={{color:"teal"}}>Hello {user.name}</h5>
      <img
        src="https://t3.ftcdn.net/jpg/08/31/86/08/360_F_831860840_WK25NlyN4nze2ghsRFvWy5qO0MEKL6Xm.jpg"
        alt="profile"
      />
    </div>
  );
};

export default Profile;
