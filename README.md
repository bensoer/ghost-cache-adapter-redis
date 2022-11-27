# ghost-cache-adapter-redis
A redis caching adapter for Ghost

WARNING: Still under heavy development. Wait until release is made before using

# Prerequisites:
- Nodejs v16
- Ghost v4+

# Installation
1. Clone the repository
2. `cd` into the project root and run the following commands:
```bash
npm install
npm run build
```
3. Copy contents in the `dist` folder to `content/adapters/cache/ghost-cache-adapter-redis`

# Configuration
Within your `config.production.json` or `config.development.json` file, configure the following:
```json
"adapters": {
  "cache": {
    "ghost-cache-adapter-redis": {
      "username": "<username>",
      "password": "<password>",
      "host": "<host>",
      "port": 6379,
      "dbNumber": 1,
      "ttl": 3600
    },
    "imageSizes": {
      "adapter": "ghost-cache-adapter-redis",
    }
  }
}
```


# Developer Resources:
- https://www.stevefenton.co.uk/blog/2013/01/complex-typescript-definitions-made-easy/
- https://www.credera.com/insights/typescript-adding-custom-type-definitions-for-existing-libraries
- https://stackoverflow.com/questions/59728371/typescript-d-ts-file-not-recognized
- https://www.npmjs.com/package/redis
- https://github.com/colinmeinke/ghost-storage-adapter-s3
- https://github.com/saulogt/custom-redis-cache-adapter
- https://ghost.org/docs/config/