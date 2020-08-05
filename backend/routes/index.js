const express = require('express')
const User = require('..models/index')
const router = express.Router()



router.get('/', (req, res) =>{
    User.find({}, (err, data) => {
        res.json(data)
    })
})
router.get('/:id', (req, res) =>{
    User.findById(req.params.id, (err, data) =>{
        res.json(data)
    })
})
router.delete('/:id', async (req, res) =>{
    await User.findByIdAndDelete(req.params.id)
    res.json({'message': 'deleted'})
})


module.exports = router