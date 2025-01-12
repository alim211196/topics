const redis = require("redis");

const redisClient = redis.createClient({
  url: "redis://127.0.0.1:6379",
});

(async () => {
  redisClient.on("error", (err) => {
    console.error("Redis Client Error", err);
  });
  await redisClient.connect();
})();

module.exports = redisClient;
