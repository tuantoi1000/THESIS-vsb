const Products = require('../models/Product');


const ProductController = {
    getAllProducts: async(req, res) => {
        // return data in value Products
        try {
            // nhận method get từ client
            const {Category, CategoryName, nameProduct} = req.query;
            // đảo ramdom mảng products
            Products.sort(() => Math.random() - 0.5);
            if (CategoryName) {
                const products = Products.filter(product => product.category.toLowerCase() == CategoryName.toLowerCase());
                return res.status(200).json(products);
            }
            if (Category) {
                const products = Products.filter(product => product.category.toLowerCase().includes(Category.toLowerCase()));
                return res.status(200).json(products);
            }
            if (nameProduct) {
                const products = Products.filter(product => product.nameProduct.toLowerCase().includes(nameProduct.toLowerCase()));
                return res.status(200).json(products);
            }
            return res.status(200).json(Products); 
        }catch(err) {
            return res.status(500).json(err);
        }
    },
    getProduct: async(req, res) => {
        // return data in value Products
        try {
            const id = req.params.id;
            const product = Products.find(product => product.id == id);
            return res.status(200).json(product); 
        }catch(err) {
            return res.status(500).json(err);
        }
    },
    getProductByCategory: async(req, res) => {
        // return data in value Products
        try {
            const id = req.params.id;
            const CategoryName = id.toLowerCase();
            const products = Products.filter(product => product.category.toLowerCase() == CategoryName);
            return res.status(200).json(products); 
        }catch(err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = ProductController;