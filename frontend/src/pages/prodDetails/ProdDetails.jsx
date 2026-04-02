import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../JS/actions/prod.actions";

const ProdDetails = () => {
  const params = useParams(); //je récupère l'id de l'url
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.productReducer.prod);
  useEffect(() => {
    dispatch(getOneProduct(params.id));
  }, [dispatch, params.id]);
  return (
    <div>
      {prod.title}
      <img src={prod.image} alt={prod.title} />
    </div>
  );
};

export default ProdDetails;
