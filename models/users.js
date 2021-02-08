const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  accountName: {
    type: String,
  },
  appKey: {
    type: String,
  },
  appToken: {
    type: String,
  },
  metodoDeFacturacion: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("users", UserSchema);
