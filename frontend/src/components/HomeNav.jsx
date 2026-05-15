import { Plus, RotateCw } from "lucide-react";
import { Link } from "react-router-dom";

const HomeNav = ({ getAllProducts }) => {
  return (
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
  );
};

export default HomeNav;
