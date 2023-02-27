import express from "express"
import pastel_routes from './routes/pastel.routes.js'
import index_routes from './routes/index.routes.js'
import {PORT} from "./config.js";
const app = express()

app.use(express.json())
app.set('json spaces', 2);

app.use(index_routes)
app.use(pastel_routes)

app.listen(PORT)
console.log('Server running on port 3000')

