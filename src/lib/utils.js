import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  console.log('connection running to db');
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      console.log('already connected');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log('connecting');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
