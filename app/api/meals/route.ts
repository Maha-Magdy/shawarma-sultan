import { NextRequest, NextResponse } from "next/server";
import { database } from "../../../lib/mongo";
import Meal from "../../../models/mealModel";

export async function GET(request: NextRequest) {
  console.log("connecting to mongo db");
  await database();
  console.log("connected to mongo db");

  const meals = await Meal.find({});

  return NextResponse.json(meals);
}

// export async function POST(request: NextRequest) {
//   console.log("connecting to mongo db");
//   await database();
//   console.log("connected to mongo db");

//   console.log("the request body is =>", request.body);
// }
