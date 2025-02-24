import pool from "../config/db.js";

async function getAllProduct(req, res) {
    try {
        const products = await pool.query("SELECT * FROM products");
        res.status(200).json(products.rows);
    }
    catch(error){
        console.error(error);
    }
}

export default getAllProduct;