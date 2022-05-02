import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  hash: String,
  //reviewId: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
});

// be aware, MongoDB will create a "plural form" for any string
// string you use here
// "user" will become "users"
const User = mongoose.model("users", userSchema);

export default User;
