import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ msg: 'ok' })
})

routes.post('/tickets', (req, res) => {
  const ticket = req.body
  res.json({ ticket })
})

export default routes
