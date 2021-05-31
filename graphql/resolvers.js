const product = require('../model/product')

const getAllProducts = async ()=>{
    return  await product.find().exec()
}

const getProducts = async (_, { product: newProduct })=>{
    return await product.find(newProduct).exec()
}

const createProduct = async (_, {product: newProduct}) =>{
    const data = await product.create(newProduct)
    return data
}

const resolvers = {
    Query: {
        getAllProducts,
        getProducts,
    },

    Mutation: {
        createProduct
    }
}

module.exports = resolvers