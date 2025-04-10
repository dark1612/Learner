const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  password: String,
  role: String,
});

<<<<<<< HEAD
module.exports = mongoose.model("User", UserSchema);
=======
module.exports = mongoose.model("User", UserSchema);
>>>>>>> db7c6e42a7c25664fff6a045b940aacacc517815
