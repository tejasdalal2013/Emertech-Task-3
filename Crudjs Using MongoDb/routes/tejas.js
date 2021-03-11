const express = require('express')
const router = express.Router()
const Tejas = require('../model/tejas')


router.get('/', async(req,res) => {
    try{
           const tejas = await Tejas.find()
           res.json(tejas)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const tejas = await Tejas.findById(req.params.id)
           res.json(tejas)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const tejas = new Tejas({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await tejas.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const tejas = await Tejas.findById(req.params.id) 
        tejas.sub = req.body.sub
        const a1 = await tejas.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router