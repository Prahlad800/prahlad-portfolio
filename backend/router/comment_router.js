import express from "express";
import { submitContact } from "../controller/comment.js";

const router = express.Router();

router.post("/", submitContact);

export default router;