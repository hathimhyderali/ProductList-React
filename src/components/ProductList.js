import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./NavBar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const parsedData = await response.json();
        setProducts(parsedData.products);
      } catch (error) {
        setError("Error fetching products: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger text-center">{error}</div>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mt-4">
        <h2>Product List</h2>
        <div className="row">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
