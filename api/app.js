import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import connectDb from "./db.js"
import routes from "./routes/route.js"
dotenv.config();
connectDb();
const port = 7000

const __dirname = path.resolve()


const app = express()


//middleware
app.use(cors())
app.use(express.json())


//routes

app.use('/', routes)
app.use(express.static(path.join(__dirname, '/client/dist')))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist',  'index.html'))
})
app.listen(port, () => console.log(`server is listening on port ${port} `))