import pool from "../config/db.js";

async function getAllProduct(req, res) {
    try {
        const products = await pool.query("SELECT * FROM products");
        console.log(products.rows);
        // res.status(200).json(products);
    }
    catch(error){
        console.error(error);
    }
}

export default getAllProduct;