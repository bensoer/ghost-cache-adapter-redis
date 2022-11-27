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
      "host": "<host>"
    },
    "imageSizes": {
      "adapter": "ghost-cache-adapter-redis",
    }
  }
}
```
Above describes the minimum required settings. All setting options available are as follows:
| Setting | Optional | Default | Description |
| ------- | -------- | ------- | ----------- |
| username | YES | `undefined` | Set username for authentication with Redis instance. Undefined will not authenticate with a username |
| password | YES | `undefined` | Set password for authentication with Redis instance. Undefined will cause the client to not authenticate at all with the redis server  |
| port | YES | 6379 | Set port to connect to redis instance on |
| ttl | YES | 3600 | Default TTL value for caching |
| dbNumber | YES | 1 | Default Redis DB to be used within the Redis instance |
| host | NO | N/A | Redis host endpoint to connect to |

**Note:** For `username` a `password` value _must_ be provided. If there is no `password` value, `username` will be ignored. If `password` is undefined, the client will connect to the redis instance without authenticating

All settings can be set also by using environment variables via Ghost's configuration environment variable syntax. See https://ghost.org/docs/config/ for details

# Developer Resources:
- https://www.stevefenton.co.uk/blog/2013/01/complex-typescript-definitions-made-easy/
- https://www.credera.com/insights/typescript-adding-custom-type-definitions-for-existing-libraries
- https://stackoverflow.com/questions/59728371/typescript-d-ts-file-not-recognized
- https://www.npmjs.com/package/redis
- https://github.com/colinmeinke/ghost-storage-adapter-s3
- https://github.com/saulogt/custom-redis-cache-adapter
- https://ghost.org/docs/config/