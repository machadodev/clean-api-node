export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://paulao:b1eIE0s1mmZ2oVyK@cluster0.fv8pn.mongodb.net/clean-node-api?retryWrites=true&w=majority',
  port: process.env.port || 5050,
  salt: process.env.salt || 12,
  jwtSecret: process.env.JWT_SECRET || 'P*a*u*10'
}
