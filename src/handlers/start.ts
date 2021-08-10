import { Composer, Markup } from 'telegraf';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `Hi <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name} ${ctx.from.last_name}</a>\n` +
        `I'm <b>Lycia</b>, <i>The Music Bot</i>\n` +
        `I can Play Songs in Group Voice Chats.\n` +
        `If you like this bot, show some support in <a href="https://t.me/NeuroticBotSupport">Support Group</a>`
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('Add me', 'http://t.me/LyciaMusicBot?startgroup=true')],
            [Markup.button.url('Commands', 'https://telegra.ph/Lycia-Music-Bot-08-06')]
        ]),
        disable_web_page_preview: true
    })
})
