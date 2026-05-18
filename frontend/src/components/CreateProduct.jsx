import { CircleX, DollarSign, Plus } from "lucide-react";
import useProductStore from "../zustand/useProductStore";

const CreateProduct = () => {
  const { CreateProduct, formData, setFormData } = useProductStore();

  return (
    <dialog id="modal" className="modal">
      <main className="modal-box">
        <form method="dialog">
          <button className="btn btn-circle btn-soft btn-ghost absolute right-2 top-2">
            <CircleX />
          </button>
        </form>
        <form
          onSubmit={CreateProduct}
          className="flex flex-col w-full space-y-4"
        >
          <legend className="fieldset-legend">Add Product</legend>

          <label className="label font-bold">Name</label>
          <input
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            className="input w-full"
            placeholder="product name..."
          />

          <label className="label font-bold">Image</label>
          <input
            type="text"
            value={formData.image}
            className="input w-full"
            placeholder="image..."
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />

          <label className="label font-bold">
            Price <DollarSign />{" "}
          </label>
          <input
            type="number"
            value={formData.price}
            className="input w-full"
            placeholder="0.00"
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />

          <button
            type="submit"
            className="btn btn-soft text-lg"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary text-lg"
            disabled={!formData.name || !formData.image || !formData.price}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Plus /> Add
          </button>
        </form>
      </main>
    </dialog>
  );
};

export default CreateProduct;
