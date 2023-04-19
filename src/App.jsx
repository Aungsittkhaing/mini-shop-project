import React, { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Detail from "./components/Detail";
import Nav from "./components/Nav";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
  };
  return (
    <div>
      <Nav setProducts={setProducts} products={products} />
      <Routes>
        <Route path="/" element={<Products pj={products} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
