const express = require('express')

require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`)
})
