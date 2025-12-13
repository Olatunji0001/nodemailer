import express from "express";
const router = express.Router();

import { sigup } from "./signup.js";

router.post("/signup", sigup);

export default router