import fastify from 'fastify'
import { DadosViabilidade } from './routes/dadosviabilidade'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  origin: true,
  // origin: ['http://localhost:3000']
})

app.register(jwt, {
  secret: 'apiteste',
})

app.register(DadosViabilidade)

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  })
  .then(() => {
    console.log('👌 HTTP server rodando bunito!')
  })
