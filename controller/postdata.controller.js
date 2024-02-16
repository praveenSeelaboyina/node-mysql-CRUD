import dbConnection from "../dbConnection/dbConnection.js";

export const postdata=(req,res)=>{
   const user = req.body;
   const userData = [user.name,user.email,user.gender,user.password]
    const postQuery="insert into employee_db.MOCK_DATA (name,email,gender,password) values (?)";
    dbConnection.query(postQuery,[userData],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.send(result)
        }
 
    })
}

