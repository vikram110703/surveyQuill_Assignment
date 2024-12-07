import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Reusing existing database connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("New database connection established");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    throw error;
  }
};

export default connectMongoDB;

