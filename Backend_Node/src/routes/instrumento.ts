import { Router } from "express";
import * as instrumento from "../controllers/InstrumentoCtrl";

const router = Router();

router.get('/api/instrumentos',instrumento.getInstrumentos);
router.get('/api/instrumentos/:id', instrumento.getInstrumentoXID);

router.post('/api/instrumentos/insert', instrumento.insertInstrumento);
router.put('/api/instrumentos/update', instrumento.actualizarInstrumento);
router.delete('/api/instrumentos/delete/:id', instrumento.eliminarInstrumento);

export default router;
