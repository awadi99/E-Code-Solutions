import express from "express";
import { createContactOne } from "./contact.controller.js";


const router = express.Router();

router.post("/message",
    createContactOne
);


export default router;