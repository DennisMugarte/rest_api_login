import { pool } from "../db.js";

//*TODO: GET = ES PARA OBTENER TODO LOS DATOS DE UNA TABLA

export const getPastel = async (req, res) =>{
    const [rows] = await pool.query('SELECT * FROM pastel_Grande')
    res.json(rows)
}

//* GET = OBTENER SOLO UN DATO EN LA TABLA

export const getObtenerPastel = async (req, res) =>{
    const [rows] = await pool.query('SELECT * FROM pastel_Grande WHERE id = ?', [req.params.id])
    // El LENGTH ===> Te devuelve cuantos arreglos tiene
    if (rows.length <= 0) return res.status(404).json({ 
        message: "The requested URL / was not found on this server" 
    });
    res.json(rows)
}

//? Para crear consulta y insertarlo en MySQL

export const getCreatePastel = async (req, res) => {
    const { nombre, sabor, dibujo, color, especial, precio, tamano, forma, galleta_o_pan } = req.body
    const  [rows] = await pool.query('INSERT INTO pastel_Grande (nombre, sabor, dibujo, color, especial, precio, tamano, forma, galleta_o_pan) VALUES (?,?,?,?,?,?,?,?,?)', [nombre, sabor, dibujo, color, especial, precio, tamano, forma, galleta_o_pan])

    // PARA EXTRAER EL JSON EN LA CONSOLA 
    // console.log(req.body)
    //
    res.send({ 
        id: rows.insertId,
        nombre,
        sabor,
        dibujo,
        color,
        especial,
        precio, 
        tamano,
        forma,
        galleta_o_pan,
    })
}

//! PARA PODER ELIMINAR LOS DATOS EN UNA TABLA  

export const getDeletePastel = async (req, res) => {
    const [result] = await pool.query('DELETE FROM pastel_Grande WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({ 
        message: "The requested URL / was not found on this server" 
    });
    res.sendStatus(204)
}

//* ES PARA ACTUALIZAR LOS DATOS

export const getUpdatePastel = async (req, res) => {
    const {id} = req.params
    const {nombre, sabor, dibujo, color, especial, precio, tamano, forma, galleta_o_pan} = req.body
    const [result] = await pool.query(
        'UPDATE pastel_Grande SET nombre = ?, sabor = ?, dibujo = ?, color = ?, especial = ?, precio = ?, tamano = ?, forma = ?, galleta_o_pan = ? WHERE id = ?',
        [nombre, sabor, dibujo, color, especial, precio, tamano, forma, galleta_o_pan, id]
    )
    res.jso('Recibido')
}
