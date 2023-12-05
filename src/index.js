const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const db = require("./models/index");
const { User, Role } = require("./models/index");

const apiRoutes = require("./routes/index");
// const {User} = require('./models/index);
// const bcrypt = require('bcrypt);
// const UserRepository = require('./repository/user-repository);

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  if (process.env.DB_SYNC) {
    db.sequelize.sync({ alter: true });
  }

  app.listen(PORT, async () => {
    console.log(`Server Started on port: ${PORT}`);
    // const repo = new UserRepository();
    // const response = await repo.getById(1);
    // console.log(response);
    //
    // const incomingpassword = "123456";
    // const user = await User.findByPk(3);
    // const response = bcrypt.compareSync(incomingpassword, user.password);
    // console.log(response);

    // const u1 = await User.findByPk(4);
    // const r1 = await Role.findByPk(2);
    // u1.addRole(r1);
  });
};

prepareAndStartServer();
