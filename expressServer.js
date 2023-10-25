import express from 'express'
const app = express()

const port = 3000;

app.get('/', (req, res) => {
  return res.send("está funcionando")
})

app.listen(port, () => {
  console.log('servidor inciado na porta' + port)
})