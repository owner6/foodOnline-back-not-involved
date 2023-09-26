const express = require ('express')
const authRouter = require('./authRouter')
const PORT = process.env.DB_PORT || 3000


const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}` ))
    } catch (e) {
        console.log(e)
    }
}

start()