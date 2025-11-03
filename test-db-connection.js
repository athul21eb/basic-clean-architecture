
const sql = require('mssql');

const config = {
    user: 'SA',
    password: 'S3cR3tP@sswOrd!',
    server: 'localhost',
    database: 'UsersDB',
    options: {
        trustServerCertificate: true,
        encrypt: false,
    }
};

async function testConnection() {
    try {
        await sql.connect(config);
        console.log('Connection successful!');
    } catch (err) {
        console.error('Connection failed:', err);
    } finally {
        sql.close();
    }
}

testConnection();
