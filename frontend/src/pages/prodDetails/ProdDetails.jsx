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
      <h3 className="m-3">Détail du {prod.title}</h3>
      <div className="page m-5 d-flex align-items-center justify-content-around">
        {prod.description}
        <img src={prod.image} alt={prod.title} width={350} />
      </div>
    </div>
  );
};

export default ProdDetails;
