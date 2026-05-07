import type { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";
import app from "../src/app.js";
import { database } from "../src/common/database/db.js";

dotenv.config();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await database.connect();
    return app(req, res);
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error?.message || "Server initialization failed.",
    });
  }
}
