import db from '../database';
import { languageKeyboard } from '../handlers/keyboard-handlers';
import { MyContext } from '../core/bot';

const startController = async (ctx: MyContext) => {
    const chat_id = ctx.chatId;

    await db('users')
        .insert({
            chat_id,
            first_name: ctx.from?.first_name.substring(0, 100),
            last_name: ctx.from?.last_name?.substring(0, 100),
        })
        .onConflict('chat_id')
        .merge();

    ctx.session.step = 'choose_language';

    const message = await ctx.reply('Botga xush kelibsiz', { parse_mode: 'HTML', reply_markup: languageKeyboard });
    ctx.session.message_id = message?.message_id;
};

export { startController };
