const express = require("express");
const router = express.Router();
const { getOrders, getOrdersByMail } = require("./utils");

//models
const UserModel = require("../models/users");

//Testing route
router.get("/", (req, res) => {
  try {
    res.send("CRUCE CHALLENGE");
  } catch (error) {
    res.send(error);
  }
});

//GET all users
router.get("/allUsers", async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    res.send(allUsers);
  } catch (error) {
    res.send(error);
  }
});

//CREATE new User
router.post("/add", async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.send("User created");
  } catch (error) {
    res.send(erro);
  }
});

//QUERY FIND by metodoDeFacturacion
router.get("/users/metodoDeFacturacion/:mdf", async (req, res) => {
  try {
    const { mdf } = req.params;
    const result = await UserModel.find({ metodoDeFacturacion: mdf });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

//Active/inactive users route

router.get("/users/usersStatus", async (req, res) => {
  try {
    const isActive = await UserModel.find({ isActive: true });
    const isInactive = await UserModel.find({ isActive: false });
    const result = {
      usuarios: {
        activos: isActive.length,
        inactivos: isInactive.length,
      },
    };
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Update users by mail
router.put("/users/update", async (req, res) => {
  /**@query  like
   * {
   * @updateUser : ['*one or more mail addresses'],
   * @paramToUpdate : [email, password,accountName, etc]
   *  */

  try {
    const email = req.body.updateUser;
    const result = await UserModel.updateMany({ email }, req.body);
    res.send(`USUARIOS ACTUALIZADOS: ${result.nModified}`);
  } catch (error) {
    res.send(error);
  }
});

//list of VTEX orders
/**@auth : [error 401 Unauthorized] */
router.get("/listOrders", (req, res) => {
  try {
    getOrders().then((orders) => res.send(orders.list));
  } catch (error) {
    res.send(error);
  }
});

// Return orders by Mail

/**@auth : [error 401 Unauthorized] */
router.get("/listOrders/byMail", async (req, res) => {
  try {
    const searchQuery = req.body.search;
    const listaOrdenes = [];
    searchQuery.forEach((element) => {
      const response = {};
      response.mail = element;
      response.ordenes = getOrdersByMail(element);
      listaOrdenes.push(response);
    });
    res.send(listaOrdenes);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
