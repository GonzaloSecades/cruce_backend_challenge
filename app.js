const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
//middlewares
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
//import routes
const indexRoutes = require("./routes/index");

//db connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/cruce-challenge", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((db) => console.log("db connected"))
//   .catch((err) => console.log(err));

//atlas config
// mongoose
//   .connect(
//     "mongodb+srv://cruce_challenge:cruce@cluster0.x84e8.mongodb.net/cruce_challenge?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then((db) => console.log("db connected"))
//   .catch((err) => console.log(err));

app.use(volleyball);

app.use(bodyParser.json());

//routes
app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
