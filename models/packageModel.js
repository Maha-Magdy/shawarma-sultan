import { mongoose } from "mongoose";

const packageSchema = new mongoose.schema({
  description: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  meals: {
    type: Mixed,
    required: true,
  },
  price_per_person: {
    type: Number,
    required: true,
  },
});

const Package =
  mongoose.models.Package || mongoose.model("Package", packageSchema);

export default Package;
