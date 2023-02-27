import express from "express"
import pastel_routes from './routes/pastel.routes.js'
import index_routes from './routes/index.routes.js'
import {PORT} from './config.js'

const app = express()

app.use(express.json())
app.set('json spaces', 2);

app.use(index_routes)
// app.use(pastel_routes)
//si no funciona elimina lo de abajo
app.use('/api/pasteria&daniel&el&travieso', pastel_routes)
//arriba xd


//* Para tirar un error si la URL no es la correcta
app.use((req, res, next) =>{
    res.status(404).json({
        Error: 'Surgio un error'
    })
})

import app from "./app"
import { PORT } from "./config.js"


app.listen(PORT)
console.log('Server running on port', PORT)

//? git add . = es para creat tu commit xd

//? git commit -m "Nombre del commit"