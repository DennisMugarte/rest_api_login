import { Router } from "express";

const router = Router()

router.get('/pastel', (req, res) => res.send({"nombre":"dennis", "apellido":"Mugarte"}))

router.post('/pastel', (req, res) => res.send("creando"))

router.put('/pastel', (req, res) => res.send("actualizando"))

router.delete('/pastel', (req, res) => res.send("eliminando"))

export default router