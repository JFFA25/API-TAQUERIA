import { Router } from "express";
import { getAll, getOne, insertOne, updateOne, deleteOne } from "../controllers/tacos.controller.js"

const router = Router();

router.get('/', getAll);

router.get('/:no_orden', getOne);

router.post('/', insertOne);

router.post('/:no_orden', updateOne);

router.get('/delete/:no_orden', deleteOne);

export default router;