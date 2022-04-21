const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWishes()
    .then((wish) => {
      res.json(wish)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
