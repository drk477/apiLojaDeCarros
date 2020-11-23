import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Carro from '../models/Carro';

// Aqui vai os models do app
const models = [Carro];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
