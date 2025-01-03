"use server";

import EventEnquiry from "@/models/eventEnquiryModel";
import {EventEnquiry as EventEnquiryType} from "@/app/types/event-enquiry";
import { database } from "@/lib/mongo";

function sendEmail(eventEnquiry: EventEnquiryType) {
  console.log("sending email to the team with the enquiry details =>", eventEnquiry);
}

type PrevState = {
  message: string;
  error: boolean;
};

export async function createEventEnquiry(
  prevState: PrevState,
  formData: FormData
) {
  try {
    const eventEnquiry = new EventEnquiry({
      name: formData.get("name"),
      eventCategory: formData.get("eventCategory"),
      phoneNumber: formData.get("phoneNumber"),
      email: formData.get("email"),
      eventDate: formData.get("eventDate"),
      eventTime: formData.get("eventTime"),
      guestsNumber: formData.get("guestsNumber"),
      address: formData.get("address"),
      details: formData.get("details"),
    });

    console.log("connecting to mongo db");
    await database();
    console.log("connected to mongo db");
    await eventEnquiry.save();
    console.log("A new event enquiry has been created!");

    // send email to the team with the enquiry details
    sendEmail(eventEnquiry);

    return {
      message:
        "Thanks for reaching out! One of our awesome team members will be in touch very soon!",
    };
  } catch (error) {
    return {
      message:
        "Whoops! Looks like something went wrong with your enquiry. Don't worry, try submitting it again in a bit. If you're still having trouble, give us a call at 07378100033.",
      error: true,
    };
  }
}
