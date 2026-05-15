import { Plus, RotateCw } from "lucide-react";

const HomeNav = ({ getAllProducts }) => {
  return (
    <nav className=" max-w-7xl mx-auto p-4 px-5 flex justify-between">
      <button
        className="btn btn-primary sm:text-xl"
        onClick={() => document.getElementById("modal")}
      >
        <Plus /> Add Product
      </button>

      <button
        className="btn btn-outline btn-primary btn-circle"
        onClick={getAllProducts}
      >
        <RotateCw />
      </button>
    </nav>
  );
};

export default HomeNav;
