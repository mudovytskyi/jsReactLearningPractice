const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('************');
    console.info(message);
    console.info('************');
};

export default {
    mongodbUri: 'mongodb://localhost:27017/db',
    port: env.PORT || 8080,
    // host: env.HOST || env.HOSTNAME || '0.0.0.0', //not working
    // host: env.HOST || '127.0.0.1',
    host: env.HOST || 'localhost',
    get serverUrl() {
        // console.log(`HOST: ${env.HOST} ${env.HOSTNAME}`)
        return `http://${this.host}:${this.port}`;
    }
}; 