//const redisclient = require('./index')
module.exports = {
    testRedis: async (req, res) => {
      console.log('entra');
      // Acceder al cliente Redis almacenado en la aplicación Express
      const redisclient = req.app.get('redisClient');
  
      // Realizar operaciones en Redis
      const message = await redisclient.get('damian');
      console.log(message);
      res.send(message);
    },
  };
  
