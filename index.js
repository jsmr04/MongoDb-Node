//Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

//Constants
const PORT = '6060'
const DB_URI = '' //TODO:  Put your MongoDB URI here

const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })

mongoose.connect(DB_URI, { useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false, useCreateIndex:true })

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}${server.graphqlPath}`)
})


