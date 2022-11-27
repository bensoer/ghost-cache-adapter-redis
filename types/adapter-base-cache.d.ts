declare module '@tryghost/adapter-base-cache' {
    export default class BaseCacheAdapter {
        public get(key:string): Promise<any>;
        public set(key:string, value: any): Promise<void>;
        public keys(): Promise<Array<string>>;
        public reset(): Promise<void>;
    }
}