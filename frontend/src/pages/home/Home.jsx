import { useEffect } from "react";
import "./home.css";
import { useDispatch } from "react-redux";
import { getALLProducts } from "../../JS/actions/prod.actions";
import ListProducts from "../../components/ListProducts";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLProducts()); //je remplis le tableau des produits
  }, [dispatch]);

  return (
    <div className="page">
      <h1>Nos Produits</h1>
      <ListProducts/>
    </div>
  );
};

export default Home;
