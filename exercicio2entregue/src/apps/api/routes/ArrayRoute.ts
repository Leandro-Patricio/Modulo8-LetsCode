import express from "express";
import { PostArrayController } from "../controllers/PostArrayController";

const router = express.Router();
const _controllerPost = new PostArrayController();

router.post("/reordena", _controllerPost.getReordenaAll);

export = router;
