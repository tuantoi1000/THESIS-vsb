const productController = require('../controllers/ProductController');
const router = require('express').Router();


//get all products
router.get("/", productController.getAllProducts);
//get one product
router.get("/:id", productController.getProduct);
//route find product by category
router.get("/category/:id", productController.getProductByCategory);

module.exports = router;
