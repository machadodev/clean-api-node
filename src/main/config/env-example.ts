export default {
  mongoUrl: process.env.MONGO_URL || 'YPUR_URL_MOGO',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'YOUR_SECRET'
}
