const config = require('../config'); // Importar configurações do JSON

import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(config);

export default sequelize;