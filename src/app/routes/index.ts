import { Router } from 'express';

import { productRouter } from '../modules/products/product.router';

const router = Router();
const moduleRoutes = [
  {
    path: '/products',
    routes: productRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
