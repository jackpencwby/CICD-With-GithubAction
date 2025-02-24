import pool from "../config/db.js"

const CreateProductTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            product_name VARCHAR(100),
            price DECIMAL(10, 2),
            stock INTEGER NOT NULL DEFAULT 0,
            description TEXT
        );
    `;

    try {
		await pool.query(query);
		console.log("Table products created successfully.");
	}
	catch (error) {
		console.error(error);
	}
	finally {
		pool.end();
	}
};

export default CreateProductTable;