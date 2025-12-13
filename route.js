import express from "express";
const router = express.Router();

import { sigup } from "./signup.js";

router.get("/signup/:gmail", sigup);

export default router