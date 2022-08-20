const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Category = sequelize.define('category',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    image: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketProduct = sequelize.define('basketProduct',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Product = sequelize.define('product',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    expiration: {type: DataTypes.STRING},
    reviews: {type: DataTypes.DOUBLE},
    energyValue: {type: DataTypes.STRING},
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = {
    User,
    Category,
    Basket,
    BasketProduct,
    Product
}

