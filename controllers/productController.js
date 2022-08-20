const uuid = require('uuid')
const path = require('path')
const {Product} = require("../models/models");
const ApiError = require('../error/ApiError')

class ProductController {
    async create (req, res, next) {
        try{
            const {name, description, price, expiration, reviews, energyValue, categoryId} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + ".png"
            await image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, description, price, expiration, reviews, energyValue, categoryId, image:fileName})
            return res.json(product)
        }
        catch (e) {
            next(ApiError.badRequest())
        }
    }
    async getAll (req, res) {
        let {categoryId} = req.query
        let products;

        if (!categoryId) {
            products = await Product.findAndCountAll()
        }
        if (categoryId) {
            products = await Product.findAndCountAll({where: {categoryId}})
        }
        return res.json(products)
    }
    async getOne (req, res, next) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
            }
        )
        return res.json(product)
    }
    async delete (req, res) {

    }
}
module.exports = new ProductController()