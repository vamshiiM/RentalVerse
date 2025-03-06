import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://vam:Password123@cluster0.jionv.mongodb.net/Rentalverse').then(() => console.log("DB connected"))
}
