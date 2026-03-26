import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../JS/actions/users.actions";
import ListUsers from "../../components/ListUsers";

const DashboardAdmin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>List des utilisateurs</h1>
      <ListUsers />
    </div>
  );
};

export default DashboardAdmin;
