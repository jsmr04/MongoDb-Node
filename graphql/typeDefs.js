const { gql } = require('apollo-server-express'); 

const typeDefs = gql`
    type Product {
        id: ID!
        code: String!
        name: String!
        quantity: Int
        price: Float 
        active: Boolean
        typeId: String
        images: [Images]
    }

    type Images {
        name: String
        url: String
    }

    input ProductInput {
        code: String!
        name: String!
        quantity: Int
        price: Float 
        active: Boolean
        typeId: String
        images: [ImageInput]
    }

    input ImageInput {
        name: String
        url: String
    }

    type Query{
        getAllProducts: [Product]
        getProducts(product: ProductInput): [Product]
    }

    type Mutation {
        createProduct(product: ProductInput) : Product
    }
`

module.exports = typeDefs