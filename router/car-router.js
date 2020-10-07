const express = require('express')

//database access using knex 

const db = require('../database/connection')

const router = express.Router();

router.get('/',(req, res)=>{
    //select * from accounts
    db.select('*').from('cardealer').then(cardealer => {
        res.status(200).json({data:cardealer})
}).catch(error=> {
    res.status(500).json({error: error.message})
})

})
router.get('/:id', (req,res) => {
// select * from postman
const {id} = req.params
db.select('*').from('cardealer').where({id}).first()//same as grabbing the first element
.then(cardealer =>{
    res.status(200).json({data: cardealer})
}).catch(error =>{
    handleError(error,res)
})
})

router.post('/', (req,res) => {
    const postData = req.body;
    //validate the data, before calling the data

    db("cardealer").insert(postData, 'id').then(ids =>{
        res.status(200).json({data:ids})
    }).catch(error =>{
        res.status(500).json({error: error.message})
    }) 
})

router.put('/:id', (req, res) => {
    const changes = req.body
    const id = req.params.id
    //please validate data before calling the database

    db("cardealer").where({ id: id }).update({changes}).then(count => {
        res.status(200).json({data: `Your Post has been updated" ${count}` })
    }) // another way of writing a where
    .catch(error => {
        res.status(404).json({ error: error.message})
    })
})

router.delete("/:id", (req,res) =>{
    const {id} = req.params
    
    db("cardealer").where({id}).del()
    .then(count => {
        if(count >0) {
            res.status(200).json({data:count})
        }else {
            res.status(404).json({message: "There was no record to delete"})
        }
    }) .catch(error => {
        handleError(error, res)
    })
})

function handleError(error, res) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
}
module.exports = router;