const db = require("../config")

class BookAuthors{
    fetchBookAuthors(req,res){
        const query = `
        SELECT id,authorName,authorSurname,bookID
        FROM BookAuthor;`
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchBookAuthor(req,res){
        const query = `
        SELECT id,authorName,authorSurname,bookID
        FROM BookAuthor
        WHERE id = ?;`
        const id = req.params.id

        db.query(query, [id], (err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    updateBookAuthor(req,res){
        const query = `
        UPDATE BookAuthor
        SET ?
        WHERE id
        `
        db.query(query,[req.body, req.params.id],
            (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The bookauthor record was updated."
                })
            })
    }
    deleteBookAuthor(req,res){
        const query = `
        DELETE FROM BookAuthor
        WHERE id = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: req.statusCode,
                msg:"The bookauthor record was delete."
            })
        })
    }
}
module.exports = BookAuthors