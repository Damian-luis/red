const redis = require('redis');
const redisclient = redis.createClient();

console.log('Connecting to Redis');

redisclient.on('ready', () => {
  console.log('Connected to Redis!');
});

redisclient.on('error', (err) => {
  console.error('Error in Redis connection:', err);
});

module.exports = {
  redisclient,
};

