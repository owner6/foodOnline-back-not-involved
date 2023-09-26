const express = require ('express')
const { Client } = require('pg');
const authRouter = require('./authRouter')
const PORT = process.env.PG_PORT || 3000


const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    const client = new Client({
        connectionString: process.env.PG_CONNECTION_STRING
    });

    try {
        await client.conect
        console.log('connect to postqresql')
        app.listen(PORT, () => console.log(`server started on port ${PORT}` ))
    } catch (e) {
        console.log(e)
    }
}

start()