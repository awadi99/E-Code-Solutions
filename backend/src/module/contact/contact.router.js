import express from "express";
import { createContactOne } from "./contact.controller.js";


const router = express.Router();

router.post("/contact",
    createContactOne
);


export default router;