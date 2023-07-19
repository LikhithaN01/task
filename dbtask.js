const mysql = require("mysql")
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "DEMO"
})
con.connect();
con.query('SELECT *FROM EMPLOYEE', function (error, results, fields) {
    if (error) throw error;
    
     console.log('The solution is: ', results);
        
});
const record = {
   
    dNAME : "sandy",
    SALARY : 33000,
    AGE :25
};
const insertQuery = 'INSERT INTO EMPLOYEE SET ?';
con.query(insertQuery,record,(error, results)=>{
    if (error) throw error;
    
     console.log('Record inserted successfully');
     console.log('INSERTD RECORD ID ', results.record);

})

const deleteQuery = 'DELETE FROM EMPLOYEE WHERE ID = "19"';
con.query(deleteQuery,(error, results)=>{
    if (error) throw error;
    
     console.log('Deleted successfully');
     console.log(' ', results.deleteQuery);
})

con.end();




// con.connect((err)=>{
//     if(err)throw err;
//     else
//     console.log("database is connected")
// })
// 'use strict';

// const mysqlx = require('@mysql/xedvapi');
// const options = { user: 'root', password: 'CloudPlinth@123', schema: 'demo' };

// (async function () {
//   let session;

//   try {
//     session = await mysqlx.getSession(options);

//     const collection = await session.getSchema(options.schema).createCollection('myCollection');
//     await collection.add({ name: 'foo' }).execute();
//     await collection.find().fields('name').execute(console.log); // { name: 'foo' }

//   } catch (err) {
//     console.error(err.message);
//   } finally {
//     session && session.close();
//   }
// })();