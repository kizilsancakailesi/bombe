import bot, { log } from './bot';
import { startUserBot } from './userbot';
import { InitMiddleWares } from './middlewares';
import { InitHandlers } from './handlers';

(async () => {
    InitMiddleWares();
    InitHandlers();
    await bot.launch({
        dropPendingUpdates: true,
    })
    await log("Bot is Running");
    await startUserBot();
})();

process.once('SIGINT', async () => {
    bot.stop('SIGINT');
})
