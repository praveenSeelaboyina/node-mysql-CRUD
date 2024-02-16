import express from 'express';
import { getdata } from '../controller/getdata.controller.js';
const getDataRouter=express()
getDataRouter.get('/getdata',getdata)

export default getDataRouter