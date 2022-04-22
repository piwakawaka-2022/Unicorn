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

router.post('/', (req, res) => {
  const addWish = req.body
  console.log(addWish)

  db.saveWish(addWish)
    .then((wish) => {
      res.json(wish)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// router.post('/', (req, res) => {

//   db.addAFruit(req.body.newName)
//     .then(idArr => {
//       const newFruit = {
//         id: idArr[0],
//         name: req.body.newName
//       }

//       res.json(newFruit)
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message })
//     })
// })
module.exports = router
