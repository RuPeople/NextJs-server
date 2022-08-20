const {Category} = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class CategoryController{
    async create (req, res, next) {
        const {name} = req.body
        const {image} = req.files
        let fileName = uuid.v4() + ".png"
        await image.mv(path.resolve(__dirname, '..', 'static', fileName ))
        const category = await Category.create({name, image:fileName})
        return res.json(category)
    }
    async getAll (req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }
    async getOne (req, res) {
        const {id} = req.params
        const category = await Category.findOne(
            {
                where: {id},
            }
        )
        return res.json(category)
    }
}

module.exports = new CategoryController()