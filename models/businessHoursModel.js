import { mongoose } from "mongoose";

const businessHoursSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  openTime: {
    type: String,
  },
  closeTime: {
    type: String,
  },
  vanId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Van",
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Location",
  },
  exceptions: [
    {
      date: {
        type: Date,
        required: true,
      },
      openTime: {
        type: String,
      },
      closeTime: {
        type: String,
      },
      details: {
        type: String,
        required: true,
      },
    },
  ],
});

const BusinessHours =
  mongoose.models.BusinessHours ||
  mongoose.model("BusinessHours", businessHoursSchema);

export default BusinessHours;
