import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
const DB_USER =process.env.DB_USER | 'root'
const DB_PASSWORD = process.env.DBPASSWORD || 'holaxd'
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_DATABASE = process.env.DB_DATABASE || 'compnydb'