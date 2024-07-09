import ProductService from "../services/product.service.js";

class ProductController {

    // create a new product
    async createProduct(req, res) {
        const productData = req.body;
        const userId = req.user._id
        const newProduct = await ProductService.createProduct({ ...productData, userId });
        res.status(201).send({
            success: true,
            message: "Product created successfully",
            newProduct
        })
    }

    // get all products
    async getProducts(req, res) {
        const products = await ProductService.getProducts();
        res.status(200).send({
            success: true,
            products
        })
    }

    // get a product by query
    async getProductQuery(req, res) {
        const productQuery = req.query;
        const queriedPrdts = await ProductService.getProduct(productQuery);
        res.status(200).send({
            success: true,
            queriedPrdts
        })
    }

    // returns all products that matches a query
    async getAllProductQuery(req, res) {
        const AllProducts = req.query;
        const products = await ProductService.getAllProduct(AllProducts);
        res.status(200).send({
            success: true,
            products
        })
    }

    // find a product that matches an id
    async getProductById(req, res) {
        //validate id if it's expecting an id
        const id = req.params.id
        const product = await ProductService.getProductById(id)
        if (!product) {
            return res.status(404).send({
                message: "Invalid _id",
                success: false
            })
        }
        return res.status(200).send({
            success: true,
            product
        })
    }

    // update a product that matches an id
    async updateProductById(req, res) {
        const id = req.params.id;
        const data = req.body;
        const foundProduct = await ProductService.getProductById(id)
        if (!foundProduct) {
            return res.status(404).send({
                message: "Invalid _id",
                success: false
            })
        }
        const product = await ProductService.updateProduct(id, data)
        res.status(200).send({
            success: true,
            product
        })
    }

    // delete a product that matches an id
    async deleteProductById(req, res) {
        const id = req.params.id
        const foundProduct = await ProductService.getProductById(id)
        if (!foundProduct) {
            return res.status(404).send({
                message: "Invalid _id",
                success: false
            })
        }
        const product = await ProductService.deletProductById(id)
        return res.status(200).send({
            success: true,
            product
        })
    }
}

export default new ProductController();