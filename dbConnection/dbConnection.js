
import mysql from 'mysql2';

const dbConnection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Apple#123",
    database:"employee_db"
})

dbConnection.getConnection((error,connection)=>{
    if(error){
        console.log(error)
    }
    console.log("succes connected to database")
})


export default dbConnection