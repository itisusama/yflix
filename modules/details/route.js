import express from "express";
import { getData, addData, updateData, deleteData, } from "./controller.js";

const detailsRoute = express.Router();

detailsRoute.get("/", getData);
detailsRoute.post("/", addData);
detailsRoute.put("/:id", updateData);
detailsRoute.delete("/:id", deleteData);

export default detailsRoute;
