import dbConnection from "../dbConnection/dbConnection.js"

export const getdata=(req,res)=>{
    const sql="SELECT * FROM employee_db.MOCK_DATA"
    dbConnection.query(sql,(err,result)=>{
        if(err){
            console.log("error",err)
            res.send()
        }
        res.json(result)
    })
}