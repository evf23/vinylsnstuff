const express = require('express')
const app = express()
const router = require('./routes/api/albums')

const PORT = process.env.PORT || 5000

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Members API Route
app.use('/api/albums', router)

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`))
