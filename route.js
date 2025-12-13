import express from "express";
const router = express.Router();

import { signup } from "./signup.js";

router.get("/signup/:gmail", signup);

export default router