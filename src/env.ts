import { cleanEnv, num, str } from 'envalid';
import dotenv from 'dotenv';
dotenv.config();

const env = cleanEnv(process.env, {
    API_ID: num(),
    API_HASH: str(),
    SESSION: str(),
    BOT_TOKEN: str(),
    LOG_CHANNEL: num(),
    CODEC: str({ default: "-c:a libmp3lame -b:a 128K" }),
    MAX_DURATION: num({ default: 360 })
})

export default env;
