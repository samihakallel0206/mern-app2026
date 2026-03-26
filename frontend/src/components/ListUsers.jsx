import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const ListUsers = () => {
  const users = useSelector((state) => state.userReducer.users);
  //   console.log(users)
  return (
    <div className="d-flex justify-content-around gap-4 flex-wrap m-5 ">
      {users
        .filter((user) => user.isAdmin === false)
        .map((user) => (
          <User key={user._id} user={user} />
        ))}
    </div>
  );
};

export default ListUsers;
