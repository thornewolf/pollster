const router = require('express').Router()
let Poll = require('../models/poll.model')

router.route('/').get((req, res) => {
    Poll.find()
        .then(polls => res.json(polls))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const pollname = req.body.pollname

    const newPoll = new Poll({pollname}) 

    newPoll.save()
        .then(() => res.json('Poll added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Poll.findById(req.params.id)
        .then(poll => res.json(poll))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Poll.findByIdAndDelete(req.params.id)
        .then(poll => res.json('Poll deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router