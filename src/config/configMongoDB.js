import mongoose from "mongoose";
import "dotenv/config";

const config = {
  mongoDB: {
    URL: "mongodb+srv://javisimon22:dJrUwMt8jA9kgApw@data-base.shzhzce.mongodb.net/?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoDB.URL, config.mongoDB.options);
    console.log("Connected to Mongo Atlas");
  } catch (error) {
    console.log("Error en la conexión con Mongo Atlas", error);
  }
};
