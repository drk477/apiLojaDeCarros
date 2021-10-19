import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';

import homeRoutes from './src/routes/home';
import carroRoutes from './src/routes/carro';
import vendedorRoutes from './src/models/vendedor';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/carros/', carroRoutes);
    this.app.use('/vendedor/', vendedorRoutes);
  }
}

export default new App().app;
