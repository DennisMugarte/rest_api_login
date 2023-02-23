import express from "express"

const app = express()

app.get('/employees', (req, res) => res.send({"nombre":"dennis", "apellido":"Mugarte"}))

app.post('/employees', (req, res) => res.send("creando"))

app.put('/employees', (req, res) => res.send("actualizando"))

app.delete('/employees', (req, res) => res.send("eliminando"))

app.listen(3000)
