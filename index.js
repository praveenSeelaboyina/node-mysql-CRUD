import express from 'express';
const app = express();
import getDataRouter from './route/getdata.route.js';
import postDataRouter from './route/postdata.route.js';
import updateRouter from './route/updatedata.route.js';
import deleteRouter from './route/deletedata.route.js';
app.use(express.json());
app.use("/",getDataRouter)
app.use("/",postDataRouter)
app.use("/",updateRouter)
app.use("/",deleteRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
