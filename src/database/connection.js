// impport module
import sql from 'mssql';
//  environment variables (SQL)
const dbSettings = {
    user: 'pruebaSQL',
    password: 'password',
    server: 'localhost',
    database: 'Libreria',
    port: 1433,
    options: {
        encrypt: true, //for azure
        trustServerCertificate: true // change to true for local dev
    },
}
// optimization of object connection settings
// sql.connect(dbSettings)

export async function getConnection() {
    try {
        // pool => permited querys and consult.
        const pool = await sql.connect(dbSettings)
        return pool;

    } catch (error) {
        console.log(error)
    }
    
}
export{sql};








