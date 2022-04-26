//"mongodb+srv://admin:luY7ixwSoVK60Eyz@cluster0.krego.mongodb.net/exerNotion?retryWrites=true&w=majority"

require('dotenv').config();

module.exports = {
    isVercel: process.env.IS_VERCEL || false,
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI,
    mongoOptions: {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
      dbName: process.env.MONGO_DATABASE,
      retryWrites: true,
      w: 'majority',
    },
  };