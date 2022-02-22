const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const PRODUCT = require('../controllers/productController');

ROUTER.get('/marketplace', PRODUCT.marketplace);
ROUTER.get('/create', PRODUCT.create);
ROUTER.get('/edit', PRODUCT.edit);
ROUTER.get('/cart', PRODUCT.cart);
ROUTER.get('/detail', PRODUCT.detail);

module.exports = ROUTER;