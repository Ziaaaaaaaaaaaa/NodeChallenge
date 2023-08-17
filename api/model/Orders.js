const db = require("../config")

class Orders{
    fetchOrders(req,res){
        const query = `
        SELECT orderID, userID,bookID,orderDate
        FROM Orders;`
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchOrder(req,res){
        const query = `
        SELECT orderID,userID,bookID,orderDate
        FROM Orders
        WHERE orderID = ?;`
        const id = req.params.id

        db.query(query, [id], (err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    updateOrder(req,res){
        const query = `
        UPDATE Orders
        SET ?
        WHERE orderID = ?
        `
        db.query(query,[req.body, req.params.id],
            (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"The order record was updated."
                })
            })
    }
    deleteOrder(req,res){
        const query = `
        DELETE FROM Orders
        WHERE orderID = ${req.params.id};
        `
        db.query(query,(err) =>{
            if(err) throw err
            res.json({
                status:req.statusCode,
                msg:"The order record was deleted."
            })
        })
    }
}
module.exports = Orders