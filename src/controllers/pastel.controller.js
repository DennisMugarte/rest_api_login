import { pool } from "../db.js";

//*TODO: GET = ES PARA OBTENER TODO LOS DATOS DE UNA TABLA

export const getPastel = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pastel_Grande')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
        error: 'Surgio algo inesperado'
        })
    }
}

//* GET = OBTENER SOLO UN DATO EN LA TABLA

export const getObtenerPastel = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pastel_Grande WHERE id = ?', [req.params.id])
        // El LENGTH ===> Te devuelve cuantos arreglos tiene
        if (rows.length <= 0) return res.status(404).json({
            message: 'The requested URL / was not found on this server' 
        });
        res.json(rows) 
    } catch (error) {
        return res.status(500).json({
            error: 'Sucedio un error'
        })
    }
}

//? Para crear consulta y insertarlo en MySQL

export const getCreatePastel = async (req, res) => {
    try {
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
    } catch (error) {
        return res.status(500).json({
            error:'Ha sucedido un error'
        })
    }
}

//! PARA PODER ELIMINAR LOS DATOS EN UNA TABLA  

export const getDeletePastel = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM pastel_Grande WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({ 
        Error: 'El id no esta registrada o ha sido eliminada'
    });
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            error:'Ha sucedido un error'
        })
    }
}

//* ES PARA ACTUALIZAR LOS DATOS DE MySQL

export const getUpdatePastel = async (req, res) => {
    const {id} = req.params
    const {nombre, sabor, dibujo, color, especial, precio, tamano, forma, galleta_o_pan} = req.body
    try {
        const [result] = await pool.query(
            'UPDATE pastel_Grande SET nombre = IFNULL(?, nombre), sabor = IFNULL(?, sabor), dibujo = IFNULL(?, dibujo), color = IFNULL(?, color), especial = IFNULL(?, especial), precio = IFNULL(?, precio), tamano = IFNULL(?, tamano), forma = IFNULL(?, forma), galleta_o_pan = IFNULL(?, galleta_o_pan) WHERE id = ?',
            [nombre, sabor, dibujo, color, especial, precio, tamano, forma, galleta_o_pan, id])
            console.log(result)
            if (result.affectedRows === 0) return res.status(404).json({
                message: 'The requested URL / was not found on this server'
            })
            const [rows] = await pool.query('SELECT * FROM pastel_Grande WHERE id = ?', [id])
            res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            error: 'sucedio un error'
        })
    }
}

