import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: false,
});

export const uploadImage = async (imageUrlObject, folderName = "") => {
  let imageInformation = {};
  const file = imageUrlObject;
  const timestamp = Math.round(new Date().getTime() / 1000);
  const folder = folderName;
  const signature = await cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      folder: folder,
    },
    process.env.CLOUDINARY_API_SECRET
  );
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", process.env.CLOUDINARY_API_KEY);
  formData.append("timestamp", timestamp);
  formData.append("folder", folderName);
  formData.append("signature", signature);

  const data = await fetch(
    `http://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      imageInformation = data;
    });
  return imageInformation;
};
