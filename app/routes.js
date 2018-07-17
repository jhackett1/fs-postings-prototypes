const express = require('express')
const router = express.Router()

router.use((req, res, next)=>{
  console.log('\n', req.session.data)
  next()
})

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

module.exports = router
