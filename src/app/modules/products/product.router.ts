import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.delete('/:id', productController.deleteProduct);
router.get('/:id', productController.getProductById);
router.get('/', productController.getAllProducts);
router.post('/create-products', productController.createProduct);
router.put('/:id', productController.updateProduct);
export const productRouter = router;
