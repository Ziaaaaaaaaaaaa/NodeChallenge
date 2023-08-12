const db = require("../config")

class Users{
    fetchUsers(req,res){
        const query = `
        SELECT userID, firstName,lastName,gender,userDOB,emailAdd,profileUrl,
        FROM Users;`
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req,res) {
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID = ${req.params.id};`

        db.query(query,
            (err,result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
    }
    login(req,res){
        const query = `
        SELECT `
    }
    register(req,res){

    }
    updateUser(req,res){
        const query = `
        UPDATE Users
        SET ?
        WHERE usersID = ?
        `
        db.query(query,[req.body, req.params.id],
            (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"The user record was updated."
                })
            })
    }
    deleteUser(req,res){
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query,(err) =>{
            if(err) throw err
            res.json({
                status:req.statusCode,
                msg:"The user record was deleted."
            })
        })
    }
}

module.exports = Users