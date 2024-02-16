import dbConnection from "../dbConnection/dbConnection.js";

export const updatedata = (req, res) => {
    const userId = req.params.id;
    const { name, email, gender, password }= req.body;

    const updateQuery = 'UPDATE employee_db.MOCK_DATA SET name=?, email=?, gender=?, password=? WHERE id = ?';

    dbConnection.query(updateQuery, [name, email, gender, password, userId], (err, result) => {
        if (err) {
            console.error('Error updating user data:', err);
            return res.status(500).send('Error updating user data');
        } else {
            console.log('User data updated successfully');
            return res.status(200).send('User data updated successfully');
        }
    });
};
