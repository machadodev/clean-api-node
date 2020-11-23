export default {
  mongoUrl: process.env.MONGO_URL || 'your-url',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'your-secret'
}
