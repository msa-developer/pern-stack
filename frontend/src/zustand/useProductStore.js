import { create } from "zustand";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

const useProductStore = create((set, get) => ({
  products: [],
  currentProduct: null,

  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormData: (data) => set({ formData: data }),
  resetForm: () => set({ formData: { name: "", image: "", price: "" } }),

  CreateProducts: async () => {
    try {
      const { formData, getAllProducts, resetForm } = get();
      await axiosInstance.post(`/`, formData);
      await getAllProducts();
      resetForm();
      document.getElementById("modal-box").close();
      toast.success("Product added");
    } catch (err) {
      toast.error("Erorr in CreateProducts function");
    }
  },

  getAllProducts: async () => {
    try {
      const res = await axiosInstance.get("/");
      set({ products: res.data });
    } catch (err) {
      if (err?.status?.response === 429) {
        toast.error("too Many requests");
        set({ products: [] });
      }
    }
  },

  DelProduct: async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      toast.success("product Deleted");
    } catch (error) {
      if (error?.response?.status === 429) toast.error("too Many requests");
      toast.error("Error in DelProduct function");
    }
  },

  updateProduct: async (id) => {
    const { formData } = get();

    try {
      await axiosInstance.put(`/${id}`, formData);
    } catch (error) {
      toast.error("error in updateProduct function");
    }
  },

  getProduct: async (id) => {
    try {
      const res = await axiosInstance.get(`/${id}`);
      set({
        currentProduct: res.data,
        formData: res.data,
      });
    } catch (err) {
      toast.error(err);
    }
  },
}));

export default useProductStore;
