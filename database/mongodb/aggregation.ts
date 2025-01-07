import mongoose from 'mongoose'

console.log("hello mongodb aggregation")

const dbConnection = async() => {
    await mongoose.connect("mongodb+srv://wintech_user:7RniL0soprwWV0dS@cluster0.c402m.mongodb.net/pet-learning")

    console.log("db connecteed")
}

dbConnection()