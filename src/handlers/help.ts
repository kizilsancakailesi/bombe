import { Composer, Markup } from 'telegraf';
import { escape } from 'html-escaper';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `Hi <a href="tg://user?id=${ctx.from.id}">${escape(ctx.from.first_name + " " + ctx.from.last_name)}</a>\n` +
        `I'm <b>Lycia</b>, <i>The Music Bot</i>.\n` +
        `I can Play Songs in Group Voice Chats.\n` +
        `\n` +
        `Maintained by <a href="https://t.me/NeuroticAssociation">Neurotic Association</a>`
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('Add me', 'http://t.me/LyciaMusicBot?startgroup=true')]
        ]),
        disable_web_page_preview: true
    })
})
