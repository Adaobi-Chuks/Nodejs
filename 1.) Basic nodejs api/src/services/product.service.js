import ProductModel from "../models/product.model.js";

// MODEL => SERVICE => CONTROLLER => ROUTE => APP.JS

class ProductService {
    // creates a new product
    async createProduct(product) {
        const newProduct = await ProductModel.create(product);
        return newProduct;
    }

    // returns all the product
    async getProducts() {
        const products = await ProductModel.find().populate("userId", "email -_id");
        return products;
    }

    // returns a product that matches a query
    async getProduct(query) {
        const product = await ProductModel.findOne(query);
        return product;
    }

    // returns all products that matches a query
    async getAllProduct(query) {
        const allProducts = await ProductModel.find(query)
        return allProducts
    }

    // find a product that matches an id
    async getProductById(id) {
        const product = await ProductModel.findById(id)
        return product;
    }

    // finds a product by id and updates it
    async updateProduct(id, data) {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, data, { new: true })
        return updatedProduct;
    }

    // find a product by id and deletes it
    async deletProductById(id) {
        const deletedProduct = await ProductModel.findByIdAndDelete(id)
        return deletedProduct;
    }
}

export default new ProductService();