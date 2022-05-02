import mongoose from "mongoose";

// completely valid, here we embed just information we need to display
// take note:
// the data in the user subdocument is repeated in the Users collection

// const reviewSchema = new mongoose.Schema({
//   film: String,
//   reviewBody: String,
//   createdOn: Date,
//   user: {
//     firstname: String,
//     lastname: String,
//   },
// });

const reviewSchema = new mongoose.Schema({
  film: String,
  reviewBody: String,
  createdOn: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const Review = mongoose.model("reviews", reviewSchema);

export default Review;
