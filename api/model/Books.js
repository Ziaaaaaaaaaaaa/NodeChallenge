const db = require("../config")

class Books{
    fetchBooks(req,res){
        const query = `
        SELECT bookID,bookTitle,category,bookUrl
        FROM Books;`
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchBook(req,res){
        const query = `
        SELECT bookID,bookTitle,category,bookUrl
        FROM Books
        WHERE bookID = ?;`
        const id = req.params.id

        db.query(query, [id], (err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    addBook(req,res){
        const query = `INSERT INTO Books SET ?`
        const data = req.body

        db.query(query, [data], (err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    updateBook(req,res){
        const query = `
        UPDATE Books
        SET ?
        WHERE bookID
        `
        db.query(query,[req.body, req.params.id],
            (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The book record was updated."
                })
            })
    }
    deleteBook(req,res){
        const query = `
        DELETE FROM Books
        WHERE bookID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status:req.statusCode,
                msg:"The book record was delete."
            })
        })
    }
}
module.exports = Books