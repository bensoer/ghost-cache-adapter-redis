import  BaseCacheAdapter from '@tryghost/adapter-base-cache'
import { createClient, RedisClientType } from 'redis'

export interface RedisCacheAdapterConfig{
    username?: string, //optional
    password?: string, // optional
    host: string,
    port?: number,
    dbNumber?: number,
    ttl?: number
}

export default class RedisCacheAdapter extends BaseCacheAdapter {

    private readonly client: RedisClientType
    private readonly config: RedisCacheAdapterConfig

    constructor(config: RedisCacheAdapterConfig){
        super();

        this.config = {
            username : config.username, // optional
            password: config.password, // optional
            host: config.host,
            port: config.port ?? 6379, // if not given use default port 6379
            dbNumber: config.dbNumber ?? 1, // if not given use 1
            ttl: config.ttl ?? 3600 // if not given use default 3600
        }

        this.config = config

        var authentication = ""
        if(this.config.password !== undefined){
            authentication += `${this.config.password}@`

            // we only consider the username value if a password was already defined
            if(this.config.username !== undefined){
                authentication = `${this.config.username}.` + authentication
            }
        }
        

        this.client = createClient({
            url: `redis://${authentication}${config.host}:${config.port}/${config.dbNumber}`
        })
        
    }

    /**
     * @param {String} key
     */
    public async get(key: string): Promise<any> {
        await this.client.connect()
        const value = await this.client.get(key)
        await this.client.disconnect()
        return value
    }

    /**
     * @param {String} key
     * @param {*} value
     */
    public async set(key:string, value: any): Promise<void> {
        await this.client.connect()
        await this.client.set(key, value, { PX: this.config.ttl })
        await this.client.disconnect()
    }

    /**
     * @returns {Promise<Array<String>>} all keys present in the cache
     */
    public async keys(): Promise<Array<string>> {
        await this.client.connect()
        const keys = await this.client.keys('*')
        await this.client.disconnect()
        return keys
    }

    /**
     * @returns {Promise<*>} clears the cache. Not meant for production
     */
    public async reset(): Promise<void> {
        await this.client.connect()
        await this.client.sendCommand(['FLUSHDB', `${this.config.dbNumber}`])
    }


}