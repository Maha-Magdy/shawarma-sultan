import { mongoose } from "mongoose";

const EventEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  eventCategory: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  guestsNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
});

const EventEnquiry =
  mongoose.models.EventEnquiry ||
  mongoose.model("EventEnquiry", EventEnquirySchema);

export default EventEnquiry;
