import { mongoose } from "mongoose";

const vanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
  },
  locationIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
  ],
});

const Van = mongoose.models.Van || mongoose.model("Van", vanSchema);

export default Van;
