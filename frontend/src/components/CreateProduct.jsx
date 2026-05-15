import { CircleX } from "lucide-react";
import useProductStore from "../zustand/useProductStore";

const CreateProduct = () => {
  const { CreateProduct } = useProductStore();

  return (
    <dialog id="modal" className="modal">
      <main className="modal-box">
        <form method="dialog" onSubmit={CreateProduct}>
          <button className="btn btn-circle btn-soft btn-ghost absolute right-2 top-2">
            <CircleX />
          </button>
        </form>
        <h3>Add Product</h3>
      </main>
    </dialog>
  );
};

export default CreateProduct;
