import pino from 'pino';
import pinoP from 'pino-pretty';

const logger = pino({
    enabled: (!!process.env.LOG_DISABLED),
    transport:{
        target:'pino-pretty',
        options: {
            colorize: true,
            crlf: true,
            timestampKey: true
        }
    }
    
});

export { logger };