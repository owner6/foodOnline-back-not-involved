const express = require ('express')
const { Client } = require('pg');
const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
    const client = new Client({
        connectionString: 'postgresql://postgres:1oa9x7@localhost:5432/postgres'
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