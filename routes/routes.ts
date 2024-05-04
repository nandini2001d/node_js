import express from "express";
import { homeDetails } from "../controllers/user";

const router = express.Router();

//router.get("/home", homeDetails);
router.get("/", homeDetails);

export { router };
