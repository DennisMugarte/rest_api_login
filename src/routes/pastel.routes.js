import { Router } from "express";
import { getCreatePastel, getDeletePastel, getObtenerPastel, getPastel, getUpdatePastel } from "../controllers/pastel.controller.js";

const router = Router()

router.get('/pastel', getPastel)

router.get('/pastel/:id', getObtenerPastel)

router.post('/pastel', getCreatePastel)

router.put('/pastel/:id', getUpdatePastel)

router.delete('/pastel/:id', getDeletePastel)

export default router