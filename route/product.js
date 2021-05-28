const express = require('express');
const router = express.Router();
const product = require('../model/product')

router.get('/', (req, res)=>{
   product.find()
       .exec()
       .then(data => {
           res.send(data)
       })
       .catch(error =>{
           res.status(400).send(error)
       })
})

router.get('/:_id', (req, res)=>{
    product.findById(req.params._id)
        .exec()
        .then(data => {
            res.send(data)
        })
        .catch(error =>{
            res.status(400).send(error)
        })
 })

router.post('/', async (req, res)=>{
    try {
        const newProduct = await product.create(req.body)    
        res.send(newProduct)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
 })

 router.put('/:_id', async (req, res)=>{
    try {
        await product.findByIdAndUpdate(req.params._id, req.body)    
        res.sendStatus(204)
    } catch (error) {
        res.status(400).send(error)
    }
 })

 router.delete('/:_id', async (req, res)=>{
    try {
        await product.findByIdAndDelete(req.params._id)    
        res.sendStatus(204)
    } catch (error) {
        res.status(400).send(error)
    }
 })

module.exports = router