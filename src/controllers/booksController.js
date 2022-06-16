import { getConnection, sql } from "../database/connection";

export const getBooks = async (req, res) => {
    try {
        // call conection 
        const pool = await getConnection();
        // request query db
        const data = await pool.request().query("select * from Libros")
        // recordset [data]
        // console.log(data)
        res.json(data.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message);

    }
};


export const getBookById = async (id, callback) => {

    const pool = await getConnection();
    const data = await pool.request()
        .input("libroID", sql.Int, id)
        .query("SELECT * FROM Libros WHERE  libroID = @libroID");
    // console.log(data)
    callback(data.recordset);
}



export const addNewBook = async ( req, res ) => {
const {nombre, autor, editorial, edicion} = req.body
    try {
        console.log(req.body);
        const pool = await getConnection();
        const data = await pool
            .request()
            .input("libroID", sql.Int, id)
            .input("nombre", sql.VarChar, nombre)
            .input("autor", sql.VarChar, autor)
            .input("editorial", sql.VarChar, editorial)
            .input("edicion", sql.VarChar, edicion)
            .query("INSERT INTO Libros ( nombre, autor, editorial, edicion) VALUES ( @nombre, @autor, @editorial, @edicion)");
        console.log(`Add`)
        callback(data.recordset.nombre);

    } catch (error) {
        return console.log(error)

    }
}

export const deleteBook = async (id, callback) => {

    const pool = await getConnection();
    const data = await pool.request()
        .input("libroID", sql.Int, id)
        .query("DELETE  FROM Libros WHERE  libroID = @libroID");
    //console.log(data)
    callback(data.recordset);
}



export const updateBook = async (id, callback) => {
const {nombre, autor, editorial, edicion} = req.body
    try {
        const pool = await getConnection();
        const data = await pool
            .request()
            .input("libroID", sql.Int, id)
            .input("nombre", sql.VarChar, nombre)
            .input("autor", sql.VarChar, autor)
            .input("editorial", sql.VarChar, editorial)
            .input("edicion", sql.VarChar, edicion)
            .query("UPDATE Libros SET  nombre = @nombre , autor = @autor, editorial = @editorial, edicion = @edicion  WHERE libroID = @libroID");
        console.log(data)
        //res.json(data.recordset);
        callback(data.recordset);

    } catch (error) {
        return console.log(error)

    }

}