import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config()
const app = express ()

app.use(express.json())  // allow us to accept JSON data in the req. body 
app.use("/api/products", productRoutes)
const PORT = process.env.PORT || 5000

console.log(process.env.MONGO_URI)
app.listen(PORT, ()=> {
    connectDB()
    console.log("server is running on port "+PORT)
})
