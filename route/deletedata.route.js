import express from "express";
import { deletedata } from "../controller/deletedata.controller.js";
const deleteRouter=express()
deleteRouter.delete('/deletedata/:id',deletedata)
export default deleteRouter;