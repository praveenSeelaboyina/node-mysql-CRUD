import express from 'express';
import { postdata } from '../controller/postdata.controller.js';
const postDataRouter=express();

postDataRouter.post('/postdata',postdata)
export default postDataRouter