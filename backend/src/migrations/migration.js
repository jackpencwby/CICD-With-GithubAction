import CreateProductTable from "../models/productModel.js"

const migrateDatabase = async () => {
	await CreateProductTable();
};

migrateDatabase();
