import { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getALLProducts } from "../../JS/actions/prod.actions";
import ListProducts from "../../components/ListProducts";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(getALLProducts()); //je remplis le tableau des produits
  }, [dispatch]);

  return (
    <div className="page m-5">
      <h1>Nos Produits</h1>
      <ListProducts products={products}  page="home"/>
    </div>
  );
};

export default Home;
