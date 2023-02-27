import { pool } from "../db.js";

export const ping = async (req,res) => {
    const [result] = await pool.query('SELECT "Brandon" AS nombre')
    res.json(result[0])
}