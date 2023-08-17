const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')
const routes = express.Router()
const { users, books, bookauthors, orders } = require('../model')
const {verifyAToken} = require('../middleware/AuthenticateUser')

// routes.get('^/$|/challenger', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../static/html/index.html"))
// })

//user's router
routes.get('/users', (req,res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', bodyParser.json(), (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(),(req, res)=>{
    users.register(req, res)
})
// routes.put('/user/:id', bodyParser.json(),(req, res) => {
//     users.updateUser(req, res)
// })
routes.patch('/user/:id', bodyParser.json(),(req, res) => {
    users.updateUser(req, res)
})
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
routes.get('/orders',(req,res)=>{
    orders.fetchOrders(req,res)
})
routes.get('/order/:id', bodyParser.json(), (req, res)=>{
    orders.fetchOrder(req,res)
})
routes.patch('/order/:id', bodyParser.json(),(req,res)=>{
    orders.updateOrder(req,res)
})
routes.delete('/order/:id', bodyParser.json(),(req,res)=>{
    orders.deleteOrder(req,res)
})
routes.get('/books',(req,res)=>{
    books.fetchBooks(req,res)
})
routes.get('/book/:id', bodyParser.json(),(req,res)=>{
    books.fetchBook(req,res)
})
routes.put('/book/:id', bodyParser.json(),(req,res)=>{
    books.updateBook(req,res)
})
routes.delete('/book/:id', bodyParser.json(),(req,res)=>{
    books.deleteBook(req,res)
})
routes.get('/bookauthors',(req,res)=>{
    bookauthors.fetchBookAuthors(req,res)
})
routes.get('/bookauthor/:id', bodyParser.json(),(req,res)=>{
    bookauthors.fetchBookAuthor(req,res)
})
routes.patch('/bookauthor/:id', bodyParser.json(),(req,res)=>{
    bookauthors.updateBookAuthor(req,res)
})
routes.delete('/bookauthor/:id', bodyParser.json(),(req,res)=>{
    bookauthors.deleteBookAuthor(req,res)
})

module.exports = {
    express,
    routes
}