import React from "react";
import useProductStore from "../zustand/useProductStore";
import ProductCard from "../components/ProductCard";
import CreateProduct from "../components/CreateProduct";
import HomeNav from "../components/HomeNav";

const HomePage = () => {
  const { getAllProducts, products } = useProductStore();

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <main>
      <HomeNav getAllProducts={getAllProducts} />
      <CreateProduct />

      <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 sm:p-12 gap-1">
        <ProductCard products={products} />
      </section>
    </main>
  );
};

export default HomePage;
