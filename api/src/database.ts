import {connect} from "mongoose";
import dotenv from "dotenv";
import {info, error} from "./config/setColors"

dotenv.config();

export function connectDB() {
  connect(process.env.DB_URI!)
    .then(()=>{info("[database]: Database is connected")})
    .catch((err)=>{error("[database]: Database could not connect"); console.error(err)})
}

