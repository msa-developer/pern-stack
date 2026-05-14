import { sql } from "../db/db.js";

export const getAllProducts = async (_, res) => {
  try {
    const products = await sql`
      SELECT * FROM products
    `;
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error in getAllProducts" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await sql`
      SELECT * FROM products
      WHERE id=${req.params.id}
    `;
    if (product.length === 0)
      return res.status(404).json({ message: "product Not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error in getProduct" });
  }
};

export const CreateProducts = async (req, res) => {
  const { name, image, price } = req.body;
  if (!name || !image || !price)
    res.status(400).json({ message: "Please fill all details" });

  try {
    const newProduct = await sql`
      INSERT INTO products (name,image,price)
      VALUES ( ${name},${image},${price} )
      RETURNING *
    `;
    res.status(201).json(newProduct[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Errro in CreateProducts" });
  }
};

export const updateProduct = async (req, res) => {
  const { name, image, price } = req.body;
  if (!name || !image || !price)
    res.status(400).json({ message: "Please fill all details" });

  try {
    const up = await sql`
      UPDATE products 
      SET name=${name},image=${image},price=${price}
      WHERE id=${req.params.id}
      RETURNING *
    `;

    if (product.length === 0)
      return res.status(404).json({ message: "product Not found" });

    res.status(200).json(up[0]);
  } catch (error) {
    res.status(500).json({ message: "Error in updateProduct" });
  }
};

export const DelProduct = async (req, res) => {
  try {
    const delP = await sql`
      DELETE FROM products 
      WHERE id=${req.params.id}
      RETURNING *
    `;
    res.status(200).json(delP[0]);
  } catch (error) {
    res.status(500).json({ message: "Error in DelProduct" });
  }
};
