import Redis from 'ioredis';
const redis = new Redis(6379, "127.0.0.1");
await redis.zadd('scoreboard', 1336, 'FizzBuzz101');
var username = ['test', 1337, 'pwned'];
username = JSON.stringify(username);
await redis.zadd('scoreboard', 0, username);
const result = await redis.zrevrange('scoreboard', 0, 99, 'WITHSCORES');
console.log(result);