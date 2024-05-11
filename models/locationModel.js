import { mongoose } from "mongoose";

const locationSchema = new mongoose.Schema({
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  county: {
    type: String,
  },
  postalCode: {
    type: String,
    required: true,
  },
  mapLocation: {
    type: String,
    required: true,
    unique: true,
  },
  vanIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Van",
    },
  ],
});

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
