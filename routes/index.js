const Router = require('express')
const router = new Router()

const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/products', productRouter)
router.use('/categories', categoryRouter)

module.exports = router
