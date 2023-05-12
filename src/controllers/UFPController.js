const {pool} = require ('../dbInformation/dbConnection');

//Get all the information of the table
const getUFP = async (req,res)=>{
    const response = await pool.query('SELECT * FROM ufp');
    res.json(response.rows)
};

module.exports={
    getUFP
}