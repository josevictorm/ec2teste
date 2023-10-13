import fastify from "fastify";

const app = fastify()

app.get('/', async () => {
  console.log('entrou na rota get')
  return 'servidor carregando'
})

app.listen({
  port: 3333,
}).then(()=>{
  console.log('servidor iniciado')
})