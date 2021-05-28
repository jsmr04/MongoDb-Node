const express = require('express');
const router = express.Router();
const type = require('../model/type')

router.get('/', (req, res)=>{
   type.find()
       .exec()
       .then(data => {
           res.send(data)
       })
       .catch(error =>{
           res.status(400).send(error)
       })
})

router.get('/:_id', (req, res)=>{
    type.findById(req.params._id)
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
        const newType = await type.create(req.body)    
        res.send(newType)
    } catch (error) {
        res.status(400).send(error)
    }
 })

 router.put('/:_id', async (req, res)=>{
    try {
        await type.findByIdAndUpdate(req.params._id, req.body)    
        res.sendStatus(204)
    } catch (error) {
        res.status(400).send(error)
    }
 })

 router.delete('/:_id', async (req, res)=>{
    try {
        await type.findByIdAndDelete(req.params._id)    
        res.sendStatus(204)
    } catch (error) {
        res.status(400).send(error)
    }
 })

module.exports = router