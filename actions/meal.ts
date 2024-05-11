"use server";

import { database } from "@/lib/mongo";
import Meal from "@/models/mealModel";
import { uploadImage } from "@/lib/cloudinary";
import { CloudinaryResponse } from "@/app/types/cloudinary-response";

export async function createMeal(prevState: any, formData: FormData) {
  try {
    const image = (await uploadImage(
      formData.get("imageUrlObject"),
      "shawarma-sultan/meals"
    )) as CloudinaryResponse;

    console.log("connecting to mongo db");
    await database();
    console.log("connected to mongo db");
    const meal = new Meal({
      imageUrl: image.url,
      name: formData.get("name"),
      description: formData.get("description"),
      vegetarian: formData.get("vegetarian") === "on" ? true : false,
    });
    await meal.save();
    console.log("done");
  } catch (e) {}
}
