import { mongoose } from "mongoose";

const mealSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    vegetarian: Boolean,
  },
  { versionKey: false }
);

const Meal = mongoose.models.Meal || mongoose.model("Meal", mealSchema);

export default Meal;
