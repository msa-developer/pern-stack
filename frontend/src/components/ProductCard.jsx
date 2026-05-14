import { Link } from "react-router-dom";
import useProductStore from "../zustand/useProductStore";

const ProductCard = ({ products }) => {
  const { DelProduct } = useProductStore();
  return (
    <>
      {products.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <div className="card bg-base-100 sm:w-96 shadow-sm">
            <figure>
              <img src={item.image} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-lg">$ {item.price}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    DelProduct(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default ProductCard;
