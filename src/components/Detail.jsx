import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
const Detail = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setProducts(data);
  };
  return (
    <div className="container">
      <div className="">
        <img src={products.image} width={200} alt="" />
        <div className="my-2">
          <span className="badge text-bg-primary">{products.category}</span>
          <h4>{products.title}</h4>
          <div className="">
            <p>{products.description}</p>
          </div>
          <p className="">
            <BsStarFill className="text-danger text-xl" />
            <small className="">rating - {products?.rating?.rate}</small>
          </p>
          <p className="text-black-50 fw-bold">Price:${products?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
