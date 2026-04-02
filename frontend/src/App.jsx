import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";
import NavBare from "./components/NavBare";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "./JS/actions/auth.actions";
import DashboardAdmin from "./pages/dashboard/DashboardAdmin";
import Loading from "./components/Loading";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const { isAuth, isLoad, user } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
      {isLoad && <Loading />}
      <NavBare />
      <Routes>
        <Route path="/" element={<Home />} />

        {isAuth ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <>
            <Route path="/profile" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        
        <Route
          path="/admin"
          element={
            <PrivateRoute
              isAdmin={user.isAdmin}
              isAuth={isAuth}
              isLoad={isLoad}
            />
          }
        >
          <Route index element={<DashboardAdmin />} />
        </Route>

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
