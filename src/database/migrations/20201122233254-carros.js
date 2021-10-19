module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("carros", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carroceria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      portas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      transmissao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      motor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      quilometragem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => queryInterface.dropTable("carros"),
};
