const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 8000;
const route = require('./routes')
const db = require('./config/db')

const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

// Connect to MongoDB
db.connect()

route(app)

app.listen(port, () => {
    console.log(`Server for IOTLAB FAKE DATA is running...`);
})