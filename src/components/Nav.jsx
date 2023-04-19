import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SiShopify } from "react-icons/si";
import { Link } from "react-router-dom";
const Nav = ({ products, setProducts }) => {
  const [search, setSearch] = useState("");

  //search with filter
  const submitHandler = (e) => {
    e.preventDefault();
    const filterApi = products.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    setProducts(filterApi);
  };

  return (
    <nav className="container d-flex justify-content-between align-items-center my-3 p-3 shadow-sm sticky-top bg-white">
      <Link to={"/"} className="text-decoration-none">
        <div className="d-flex align-items-center gap-2">
          <SiShopify className="fw-bolder fs-2 text-info" />
          <h4 className="mb-0 fw-bolder text-primary text-uppercase">
            Ask Shop
          </h4>
        </div>
      </Link>
      <form className="d-flex" onSubmit={submitHandler}>
        <Link to={"/"}>
          <button type="button" className="btn btn-lg btn-primary">
            <BsSearch />
          </button>
        </Link>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control ms-2"
        />
      </form>
    </nav>
  );
};

export default Nav;
