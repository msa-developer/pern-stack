import { Plus, RotateCw } from "lucide-react";
import React from "react";
import useProductStore from "../zustand/useProductStore";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { getAllProducts, products } = useProductStore();

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <main>
      <nav className=" max-w-7xl mx-auto p-4 px-5 flex justify-between">
        <Link to={"/create"}>
          <button className="btn btn-primary sm:text-xl">
            <Plus /> Add Product
          </button>
        </Link>
        <button
          className="btn btn-outline btn-primary btn-circle"
          onClick={getAllProducts}
        >
          <RotateCw />
        </button>
      </nav>

      <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 sm:p-12 gap-1">
        <ProductCard products={products} />
      </section>
    </main>
  );
};

export default HomePage;
