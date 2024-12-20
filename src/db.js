const msql = require('mysql2');

const connection = new msql.createConnection({
host:process.env.MYSQL_HOST,
port:process.env.MYSQL_PORT,
user:process.env.MYSQL_USER,
password:process.env.MYSQL_PASSWORD,
database:process.env.MYSQL_DATABASE

});

connection.connect((err) => {
if(err){
    console.log('eRROR Connected to the dataBase.', err.message);
}
else{
    console.log('Connected to the dataBase...');
}
});

module.exports = connection;