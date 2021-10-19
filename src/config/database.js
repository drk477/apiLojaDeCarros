module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "lojadecarros",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
