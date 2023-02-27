import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server is running on port 3000')
})
