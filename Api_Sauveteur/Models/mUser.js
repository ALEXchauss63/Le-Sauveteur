const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  telNumber: { type: Number, require: true },
  password: { type: String, require: true },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
