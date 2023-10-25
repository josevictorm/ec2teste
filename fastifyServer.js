import fastify from "fastify";

const app = fastify()

app.get('/', (req, res) => {
  return res.send('servidor funcionando milkwise')
})

app.listen({port:3333,}).then(() => {
  console.log('servidor iniciado')
})