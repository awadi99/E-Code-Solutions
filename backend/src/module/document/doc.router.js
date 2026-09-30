import express from "express";
import { createIdeaOne } from "./doc.controller.js";

const router = express.Router();

router.post("/idea",
    createIdeaOne
);

export default router;