import pool from "../config/db.js"

const CreateProductTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS products (
            Id SERIAL PRIMARY KEY,
            ProductName VARCHAR(100),
            Price DECIMAL(10, 2),
            Stock INTEGER NOT NULL DEFAULT 0,
            Description TEXT
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