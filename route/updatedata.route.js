import express from "express";
import { updatedata } from "../controller/updatedata.controller.js";
const updateRouter=express();
updateRouter.put("/updatedata/id",updatedata)
export default updateRouter