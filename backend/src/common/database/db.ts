import mongoose from "mongoose";

let hasConnected = false;

export const database = {
  connect: async () => {
    if (hasConnected || mongoose.connection.readyState === 1) {
      return;
    }

    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoUri);
    hasConnected = true;
    console.log("✅ MongoDB connected successfully");
  },
};
