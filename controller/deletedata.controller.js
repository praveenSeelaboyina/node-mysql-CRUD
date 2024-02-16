import dbConnection from "../dbConnection/dbConnection.js";


export const deletedata=(req,res)=>{
    const {id}=req.params;
   
    const deleteQuery="delete from employee_db.MOCK_DATA where id=?";
    dbConnection.query(deleteQuery,[id],(err,result)=>{
        if (err) {
            console.error('Error deleting user data:', err);
            return res.status(500).send('Error deleting user data');
        } else {
            console.log('User data deleted successfully');
            return res.status(200).send('User data deleted successfully');
        }
    })
}