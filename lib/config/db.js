import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://fvieira:fravie09@cluster0.hofzc.mongodb.net/todo-app');
    console.log("DB Connected");
}
