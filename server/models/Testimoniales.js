const Sequelize = require("sequelize");

const db = require("../config/database");

const Testimonial = db.define("testimoniales", {
  id: {
    type: Sequelize.INTEGER,
  },
  nombre: {
    type: Sequelize.STRING,
  },
  correo: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});

module.exports = Testimonial;
